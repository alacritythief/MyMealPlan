# Generated by Django 2.2.4 on 2019-09-02 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='meal_type',
            field=models.CharField(blank=True, db_index=True, max_length=255),
        ),
    ]
