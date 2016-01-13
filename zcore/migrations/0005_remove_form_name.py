# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zcore', '0004_form_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='name',
        ),
    ]
