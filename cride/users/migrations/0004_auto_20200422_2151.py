# Generated by Django 3.0.3 on 2020-04-22 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_skill'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='level_value',
            field=models.PositiveIntegerField(blank=True, max_length=10, null=True),
        ),
    ]
