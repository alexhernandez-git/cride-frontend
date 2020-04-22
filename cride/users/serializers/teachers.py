"""Teacher serializer."""

# Django REST Framework
from rest_framework import serializers

# Models
from cride.users.models import Teacher, ClassPrice, Teach

# Serializes
from .prices import PriceModelSerializer
from .teaches import TeachModelSerializer


class TeacherModelSerializer(serializers.ModelSerializer):
    """Profile model serializer."""
    class_price = PriceModelSerializer()
    teaches = serializers.SerializerMethodField()

    class Meta:
        """Meta class."""

        model = Teacher
        fields = (
            'rating',
            'presentation',
            'video_presentation',
            'class_price',
            'teaches'
        )
        read_only_fields = (
            'rating',
        )

    def get_teaches(self, obj):
        teaches = Teach.objects.filter(teacher_id=obj.id)
        return TeachModelSerializer(teaches, many=True).data

    def update(self, instance, validated_data):

        # Actualizar el precio de la clase
        new_class_price = validated_data.pop('class_price', None)
        if new_class_price:
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

        if self.context['teaches'] != None:
            Teach.objects.filter(teacher_id=instance.pk).delete()
            for teach in self.context['teaches']:
                Teach.objects.create(**teach, teacher_id=instance.pk)

        return super(TeacherModelSerializer, self).update(instance, validated_data)
