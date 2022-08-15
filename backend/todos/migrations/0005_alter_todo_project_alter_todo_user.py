# Generated by Django 4.1 on 2022-08-12 15:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project', '0002_alter_project_users'),
        ('todos', '0004_todo_project_todo_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='project',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='project.project'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
