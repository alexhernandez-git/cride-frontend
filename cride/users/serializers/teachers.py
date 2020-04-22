"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Teacher, ClassPrice

# Serializes
from .prices import PriceModelSerializer


class TeacherModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""
    class_price = PriceModelSerializer(allow_null=True)

    class Meta:
        """Meta class."""

        model = Teacher
        fields = (
            'rating',
            'presentation',
            'video_presentation',
            'class_price'
        )
        read_only_fields = (
            'rating',
        )

    def update(self, instance, validated_data):

        # Actualizar el precio de la clase
        if validated_data.get('class_price'):
            new_class_price = validated_data.pop('class_price')
            if instance.class_price == None:
                class_price = ClassPrice.objects.create(
                    value=new_class_price['value'],
                    level=new_class_price['level'],
                    type=new_class_price['type']
                )
                instance.class_price = class_price
                instance.save()
            else:
                class_price = instance.class_price
                class_price.value = new_class_price['value']
                class_price.level = new_class_price['level']
                class_price.type = new_class_price['type']
                instance.class_price = class_price
                instance.save()

        return super(TeacherModelSerializer, self).update(instance, validated_data)
