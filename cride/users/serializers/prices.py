"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Price


class PriceModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Price
        fields = (
            'value',
            'type',
            'level',
        )
