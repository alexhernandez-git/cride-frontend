"""Main URLs module."""

from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    # Django Admin
    path(settings.ADMIN_URL, admin.site.urls),
    path('api/', include(('cride.circles.urls', 'circles'), namespace='circles')),
    path('api/', include(('cride.users.urls', 'users'), namespace='users')),
    path('api/', include(('cride.rides.urls', 'rides'), namespace='rides')),
    path('', include('cride.frontend.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
