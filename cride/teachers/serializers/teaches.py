"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Teach


class TeachModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Teach
        fields = (
            'id',
            'subject_value',
        )

        read_only_fields = (
            'id',
            'username',
        )
