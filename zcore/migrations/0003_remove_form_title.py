# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zcore', '0002_form_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='title',
        ),
    ]
