# -*- coding: utf-8 -*-
import json

from django.db import models
from django.db import connections
from django.http import HttpResponse, HttpResponseRedirect


class News(models.Model):
    title = models.CharField(max_length=200, default='')
    body = models.TextField()

    def __str__(self):
        name = 'id_' + str(self.pk) + ': ' + self.title
        return name

class Form(models.Model):
    title = models.CharField(max_length=200, default='')
    e_mail = models.CharField(max_length=200, default='')
    phone = models.CharField(max_length=200, default='')
    body = models.TextField()

    def __str__(self):
        name = 'id_' + str(self.pk) + ': ' + self.title
        return name

"""
class Node(models.Model):
    id = models.PositiveIntegerField()
    data = models.CharField(max_length=500)

    class Meta:
        abstract = True
"""        

