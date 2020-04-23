"""Work experience serializer serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.teachers.models import BusinessHours

from datetime import timedelta


class BusinessHoursModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = BusinessHours
        fields = (
            'id',
            'start',
            'end',
            'week_day'
        )
        extra_kwargs = {'end': {'required': False}}
        read_only_fields = (
            'id',
        )

    def validate(self, data):
        if not data.get('end'):
            end = data.get('start') + timedelta(hours=1)
            data['end'] = end
        return data

    def create(self, validated_data):
        return BusinessHours.objects.create(**validated_data, teacher_id=self.context['request'].user.teacher.pk)
