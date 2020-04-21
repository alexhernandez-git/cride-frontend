"""Country serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.utils.models import Country


class CountryModelSerializer(serializers.ModelSerializer):
    """Country model serializer."""

    class Meta:
        """Meta class."""

        model = Country
        fields = (
            'code',
            'name',
        )
        read_only_fields = (
            'code',
            'name',
        )
