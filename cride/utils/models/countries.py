"""Coutry model."""

# Django
from django.db import models


class Country(models.Model):
    """Coutry model.
    """
    code = models.SlugField(primary_key=True, max_length=10)
    name = models.CharField(max_length=100)

    def __str__(self):
        """Return language."""
        return '{}'.format(self.name)
