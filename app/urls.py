# -*- coding: utf-8 -*-
from django.conf.urls import include, url
from django.contrib import admin

from zcore.views import *


urlpatterns = [
    url(r'^zcore/', include('zcore.urls', namespace='zcore')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^syscheck/', include('syscheck.urls', namespace='syscheck')),
]

urlpatterns += [
    url(r'^$', 'zcore.views.index', name='index'),
    #url(r'^timeline/(?P<id>[-\w]+)/$', 'zcore.views.view_timeline', name='viewTimeline'),

    url(r'^news/(?P<pk>[0-9]+)/$', NewsDetail.as_view()),
    url(r'^news/$', NewsList.as_view()),
    url(r'^forms/(?P<pk>[0-9]+)/$', FormsDetail.as_view()),
    url(r'^forms/$', FormsList.as_view()),
]


