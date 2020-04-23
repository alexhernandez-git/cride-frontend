"""Users URLs."""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from .views import users as user_views
from .views import languages as language_views
from .views import skills as skill_views
from .views import work_experience as work_experience_views
from .views import academic_experience as academic_experience_views
from .views import business_hours as business_hours_views
from .views import ratings as rating_views

router = DefaultRouter()
router.register(r'users', user_views.UserViewSet, basename='users')
router.register(r'languages', language_views.LanguageViewSet, basename='languages')
router.register(r'skills', skill_views.SkillViewSet, basename='skills')
router.register(r'work-experience', work_experience_views.WorkExperienceViewSet, basename='work-experience')
router.register(r'academic-experience', academic_experience_views.AcademicExperienceViewSet,
                basename='academic-experience')
router.register(r'business-hours', business_hours_views.BusinessHoursViewSet, basename='business-hours')
router.register(r'ratings', rating_views.RatingViewSet, basename='business-hours')


urlpatterns = [
    path('', include(router.urls))
]
