"""Work experience model."""

# Django
from django.db import models

# Utilities
from cride.utils.models import CLineModel

import random
import string


class WorkExperience(CLineModel):
    """Teaches price model.
    A profile holds a user's public data like biography, picture,
    and statistics.
    """
    id = models.CharField(primary_key=True, max_length=10)
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    current_working = models.BooleanField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True, null=True)
    description = models.TextField(max_length=500, blank=True)
    teacher = models.ForeignKey('users.Teacher', on_delete=models.CASCADE)

    def __str__(self):
        """Return price."""
        return '{}'.format(self.company)

    def save(self, **kwargs):
        if not self.id:
            while True:
                slug_name = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))
                if not WorkExperience.objects.filter(pk=slug_name).exists():
                    self.id = slug_name
                    break

        super(WorkExperience, self).save(**kwargs)
