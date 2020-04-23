"""Profile serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.teachers.models import Rating

# Serializers
from cride.users.serializers.users import UserWithoutTeacherModelSerializer


class RatingModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""
    rating_user = UserWithoutTeacherModelSerializer(read_only=True)

    class Meta:
        """Meta class."""

        model = Rating
        fields = (
            'id',
            'rating',
            'comment',
            'rating_user',
            'created'
        )
        read_only_fields = (
            'classes_buyed',
        )

        def create(self, validated_data):
            return Rating.objects.create(**validated_data, user_id=self.context['request'].pk)
