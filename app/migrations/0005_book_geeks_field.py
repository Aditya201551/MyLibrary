# Generated by Django 3.2.3 on 2021-06-06 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20210606_2200'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='geeks_field',
            field=models.CharField(choices=[('1', 'One'), ('2', 'Two'), ('3', 'Three'), ('4', 'Four'), ('5', 'Five')], default='1', max_length=5),
        ),
    ]
