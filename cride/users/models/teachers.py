"""Teaches Model"""


# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel


class Teacher(CLineModel):
    """Teacher model."""
    user = models.OneToOneField('users.User', on_delete=models.CASCADE)

    rating = models.FloatField(
        default=0.0,
        help_text="Teacher's reputation based on the rides taken and offered."
    )
    presentation = models.TextField(max_length=500, blank=True)
    video_presentation = models.FileField(
        'profile video',
        upload_to='users/videos/',
        blank=True,
        null=True
    )
