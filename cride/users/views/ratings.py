"""Work experience views."""

# Django REST Framework
from cride.users.models import Rating
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
from cride.users.permissions import IsAccountOwner, IsTeacherOwner

# Serializers
from cride.users.serializers import RatingModelSerializer


# Models


class RatingViewSet(mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    """User view set.

    Handle sign up, login and account verification.
    """
    queryset = Rating.objects.all()
    serializer_class = RatingModelSerializer
    lookup_field = 'pk'

    def get_permissions(self):
        """Assign permissions based on action."""
        if self.action in ['update', 'delete', 'partial_update', 'post']:
            permissions = [IsAuthenticated, IsTeacherOwner]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]
