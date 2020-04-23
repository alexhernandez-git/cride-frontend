"""Profile serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Profile


class ProfileModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""
    class Meta:
        """Meta class."""

        model = Profile
        fields = (
            'picture',
            'birth_date',
            'classes_buyed',
            'is_teacher',
            'language',
            'country'
        )
        read_only_fields = (
            'classes_buyed',
        )
