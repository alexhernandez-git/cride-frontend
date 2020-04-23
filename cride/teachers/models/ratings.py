"""Work experience model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel

import random
import string


class Rating(CLineModel):
    """Teaches rating model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """
    id = models.CharField(primary_key=True, max_length=10)
    rating = models.IntegerField(default=1)
    comment = models.TextField(blank=True)

    rating_user = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        help_text='User that emits the rating',
        related_name='rating_user'
    )
    rated_user = models.ForeignKey(
        'users.User',
        on_delete=models.SET_NULL,
        null=True,
        help_text='User that receives the rating.',
        related_name='rated_user'
    )
    related_teacher = models.ForeignKey(
        'users.Teacher',
        on_delete=models.SET_NULL,
        null=True,
        help_text='Teacher that receives the rating.',
        related_name='rated_teacher'
    )

    def __str__(self):
        """Return price."""
        return '{}'.format(self.comment)

    def save(self, **kwargs):
        if not self.id:
            while True:
                slug_name = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))
                if not Rating.objects.filter(pk=slug_name).exists():
                    self.id = slug_name
                    break

        super(Rating, self).save(**kwargs)
