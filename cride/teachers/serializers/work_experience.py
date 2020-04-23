"""Work experience serializer serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.teachers.models import WorkExperience


class WorkExperienceModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = WorkExperience
        fields = (
            'id',
            'title',
            'company',
            'current_working',
            'start_date',
            'end_date',
            'description'
        )
        extra_kwargs = {'end_date': {'required': False}}
        read_only_fields = (
            'id',
        )

    def validate(self, data):
        if not data.get('current_working') and data.get('end_date'):
            if data.get('start_date') > data.get('end_date'):
                raise serializers.ValidationError('Start date is higher than end date')
        return data

    def create(self, validated_data):
        return WorkExperience.objects.create(**validated_data, teacher_id=self.context['request'].user.teacher.pk)
