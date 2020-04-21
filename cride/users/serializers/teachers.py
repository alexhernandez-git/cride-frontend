"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Teacher


class TeacherModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Teacher
        fields = (
            'rating',
            'presentation',
            'video_presentation',
        )
        read_only_fields = (
            'rating',
        )
