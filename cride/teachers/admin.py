"""User models admin."""

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Models
from cride.users.models import User, Profile


class CustomUserAdmin(UserAdmin):
    """User model admin."""

    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_client')
    list_filter = ('is_client', 'is_staff', 'created', 'modified')


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """Profile model admin."""

    list_display = ('user', 'birth_date', 'classes_buyed', 'is_teacher')
    search_fields = ('user__username', 'user__email', 'user__first_name', 'user__last_name')
    list_filter = ('birth_date',)


admin.site.register(User, CustomUserAdmin)
