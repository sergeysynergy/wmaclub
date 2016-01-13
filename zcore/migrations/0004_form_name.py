# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zcore', '0003_remove_form_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='name',
            field=models.CharField(default='', max_length=200),
        ),
    ]
