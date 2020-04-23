"""Prices model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel

import random
import string


class Language(CLineModel):
    """Teaches price model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """
    id = models.CharField(primary_key=True, max_length=10)
    language_value = models.CharField(max_length=10, blank=True, null=True)
    level_value = models.CharField(max_length=10, blank=True, null=True)
    teacher = models.ForeignKey('users.Teacher', on_delete=models.CASCADE)

    def __str__(self):
        """Return price."""
        return '{}'.format(self.language_value)

    def save(self, **kwargs):
        if not self.id:
            while True:
                slug_name = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))
                if not Language.objects.filter(pk=slug_name).exists():
                    self.id = slug_name
                    break

        super(Language, self).save(**kwargs)
