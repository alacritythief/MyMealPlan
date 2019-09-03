# Generated by Django 2.2.4 on 2019-09-03 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_recipe_budget_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='budget_type',
            field=models.CharField(choices=[('verylow', 'Very Low'), ('low', 'Low'), ('medium', 'Medium'), ('high', 'High')], db_index=True, default='medium', max_length=255),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='meal_type',
            field=models.CharField(blank=True, choices=[('breakfast', 'Breakfast'), ('lunch', 'Lunch'), ('dinner', 'Dinner')], db_index=True, max_length=255),
        ),
    ]
