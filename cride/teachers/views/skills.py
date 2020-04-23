"""Users views."""

# Django REST Framework
from cride.users.models import Skill
from cride.users.serializers import (
    UserLoginSerializer,
    UserModelSerializer,
    UserSignUpSerializer,
    AccountVerificationSerializer,

)
from rest_framework import status, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser
)
from cride.users.permissions import IsTeacherOwner

# Serializers
from cride.users.serializers.skills import SkillModelSerializer


# Models


class SkillViewSet(mixins.CreateModelMixin,
                   mixins.DestroyModelMixin,
                   viewsets.GenericViewSet):
    """Skill view set.
    """
    queryset = Skill.objects.all()
    serializer_class = SkillModelSerializer
    lookup_field = 'pk'

    def get_permissions(self):
        """Assign permissions based on action."""
        if self.action in ['update', 'delete', 'partial_update', 'post']:
            permissions = [IsAuthenticated, IsTeacherOwner]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]
