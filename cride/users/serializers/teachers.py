"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Teacher

# Serializes
from .prices import PriceModelSerializer


class TeacherModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""
    price = PriceModelSerializer()

    class Meta:
        """Meta class."""

        model = Teacher
        fields = (
            'rating',
            'presentation',
            'video_presentation',
            'price'
        )
        read_only_fields = (
            'rating',
        )
