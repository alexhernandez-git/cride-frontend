"""Language serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.utils.models import Language


class LanguageModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Language
        fields = (
            'code',
            'name',
            'native_name',
        )
        read_only_fields = (
            'code',
            'name',
            'native_name',
        )
