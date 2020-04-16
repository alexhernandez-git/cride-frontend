"""Main URLs module."""

from django.conf import settings
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    # Django Admin
    path(settings.ADMIN_URL, admin.site.urls),
    path('api/', include(('cride.users.urls', 'users'), namespace='users')),
    re_path(r'^(?!media/)(?!api/).*', include('cride.frontend.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
