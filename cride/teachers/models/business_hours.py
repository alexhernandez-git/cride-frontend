"""Work experience model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel

import random
import string


class BusinessHours(CLineModel):
    """Teaches price model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """
    id = models.CharField(primary_key=True, max_length=10)
    start = models.DateTimeField()
    end = models.DateTimeField(blank=True, null=True)
    week_day = models.PositiveIntegerField()
    teacher = models.ForeignKey('users.Teacher', on_delete=models.CASCADE)

    def __str__(self):
        """Return price."""
        return 'Start: {}, end: {}'.format(self.start, self.end)

    def save(self, **kwargs):
        if not self.id:
            while True:
                slug_name = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))
                if not BusinessHours.objects.filter(pk=slug_name).exists():
                    self.id = slug_name
                    break

        super(BusinessHours, self).save(**kwargs)
