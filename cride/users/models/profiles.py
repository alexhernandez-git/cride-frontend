"""Profile model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel


class Profile(CLineModel):
    """Profile model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """

    user = models.OneToOneField('users.User', on_delete=models.CASCADE)

    picture = models.ImageField(
        'profile picture',
        upload_to='users/pictures/',
        blank=True,
        null=True
    )
    # biography = models.TextField(max_length=500, blank=True)

    birth_date = models.DateTimeField(blank=True, null=True)

    # Stats
    classes_buyed = models.PositiveIntegerField(default=0)
    is_teacher = models.BooleanField(default=False)

    language = models.OneToOneField('utils.Language', on_delete=models.CASCADE, blank=True, null=True)

    country = models.OneToOneField('utils.Country', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        """Return user's str representation."""
        return str(self.user)
