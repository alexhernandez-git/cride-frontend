"""Users URLs."""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from .views import users as user_views
from .views import languages as language_views
from .views import skills as skill_views

router = DefaultRouter()
router.register(r'users', user_views.UserViewSet, basename='users')
router.register(r'languages', language_views.LanguageViewSet, basename='languages')
router.register(r'skills', skill_views.SkillViewSet, basename='skills')

urlpatterns = [
    path('', include(router.urls))
]
