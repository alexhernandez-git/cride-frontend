"""Language model."""

# Django
from django.db import models


class Language(models.Model):
    """Language model.
    """
    code = models.SlugField(primary_key=True, max_length=10)
    name = models.CharField(max_length=100)
    native_name = models.CharField(max_length=100)

    def __str__(self):
        """Return language."""
        return '{}'.format(self.native_name)
