# Generated by Django 5.1 on 2024-08-22 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('codingAssessment_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shark',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='sharks/'),
        ),
    ]
