"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.teachers.models import Skill


class SkillModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""

    class Meta:
        """Meta class."""

        model = Skill
        fields = (
            'id',
            'skill_value',
            'level_value'
        )

        read_only_fields = (
            'id',
        )

    def validate_skill_value(self, data):
        language = Skill.objects.filter(skill_value=data, teacher_id=self.context['request'].user.teacher.pk)
        if language:
            raise serializers.ValidationError('You already introduced that skill.')
        return data

    def validate(self, data):
        if data.get('skill_value') == "":
            raise serializers.ValidationError('Skill value is not fill')
        if data.get('level_value') == None:
            raise serializers.ValidationError('Level value is not fill')
        return data

    def create(self, validated_data):
        return Skill.objects.create(**validated_data, teacher_id=self.context['request'].user.teacher.pk)
