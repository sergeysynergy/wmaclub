# -*- coding: utf-8 -*-
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.db import connections

from rest_framework.authentication import SessionAuthentication
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.parsers import FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from .models import News
from .serializers import *


# Подготока данных и вызов рендеринга шаблона вывода index.html
def index(request):
    news = News.objects.order_by('-pk')    
    context = {'news': news,}
    return render(request, 'zcore/index.html', context)


class NewsList(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    

class FormsList(generics.ListCreateAPIView):
    queryset = Form.objects.all()
    serializer_class = FormsSerializer

class FormsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Form.objects.all()
    serializer_class = FormsSerializer
    

