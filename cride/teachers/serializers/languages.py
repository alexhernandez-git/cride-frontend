"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.teachers.models import Language


class LanguageModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Language
        fields = (
            'id',
            'language_value',
            'level_value'
        )

        read_only_fields = (
            'id',
        )

    def validate_language_value(self, data):
        language = Language.objects.filter(language_value=data, teacher_id=self.context['request'].user.teacher.pk)
        if language:
            raise serializers.ValidationError('You already have selected this language')

        return data

    def validate(self, data):
        if data.get('language_value') == "":
            raise serializers.ValidationError('Language value is not fill')
        if data.get('level_value') == "":
            raise serializers.ValidationError('Level value is not fill')
        return data

    def create(self, validated_data):
        return Language.objects.create(**validated_data, teacher_id=self.context['request'].user.teacher.pk)
