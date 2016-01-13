# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import News, Form

admin.site.register(News)
admin.site.register(Form)
