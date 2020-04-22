"""Prices model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel


class ClassPrice(CLineModel):
    """Teacher price model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """

    value = models.FloatField(blank=True, null=True)

    type = models.CharField(max_length=5, blank=True, null=True)

    level = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        """Return price."""
        return 'Level: {}, Value: {}, Currency: {}'.format(self.level, self.value, self.type)
