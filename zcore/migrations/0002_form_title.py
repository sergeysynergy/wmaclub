# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zcore', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='title',
            field=models.CharField(max_length=200, default=''),
        ),
    ]
