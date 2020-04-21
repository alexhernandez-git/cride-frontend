"""Users views."""

# Django REST Framework
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
from cride.users.permissions import IsAccountOwner

# Serializers
from cride.users.serializers.profiles import ProfileModelSerializer, UpdateProfileModelSerializer
from cride.users.serializers.teachers import TeacherModelSerializer
from cride.users.serializers import (
    UserLoginSerializer,
    UserModelSerializer,
    UserSignUpSerializer,
    AccountVerificationSerializer,

)

# Models
from cride.users.models import User


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    """User view set.

    Handle sign up, login and account verification.
    """

    queryset = User.objects.filter(is_active=True, is_client=True)
    serializer_class = UserModelSerializer
    lookup_field = 'pk'

    def get_permissions(self):
        """Assign permissions based on action."""
        if self.action in ['signup', 'login', 'verify']:
            permissions = [AllowAny]
        elif self.action in ['update', 'update', 'partial_update']:
            permissions = [IsAuthenticated, IsAccountOwner]
        elif self.action == 'list':
            permissions = [IsAuthenticated, IsAdminUser]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]

    @action(detail=False, methods=['post'])
    def login(self, request):
        """User login."""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token,
        }
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up."""
        request.data['username'] = '{} {}'.format(request.data['first_name'], request.data['last_name'])
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def verify(self, request):
        """Account verification."""
        serializer = AccountVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = {'message': 'Congratulations, now go share some rides!'}
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['put', 'patch'])
    def profile(self, request, *args, **kwargs):
        """Update profile data."""
        user = self.get_object()

        profile = user.profile
        partial = request.method == 'PATCH'
        serializer = UpdateProfileModelSerializer(
            profile,
            data=request.data,
            partial=partial
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = UserModelSerializer(user).data
        return Response(data)

    @action(detail=True, methods=['put', 'patch'])
    def teacher(self, request, *args, **kwargs):
        """Update profile data."""
        user = self.get_object()
        teacher = user.teacher
        partial = request.method == 'PATCH'
        serializer = TeacherModelSerializer(
            teacher,
            data=request.data,
            partial=partial
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = UserModelSerializer(user).data
        return Response(data)

    @action(detail=False, methods=['get'])
    def get_profile(self, request, *args, **kwargs):
        # circles = Circle.objects.filter(
        #     members=request.user,
        #     membership__is_active=True
        # )
        # invitations = Invitation.objects.filter(
        #     used_by=request.user,
        #     used=False
        # )
        data = {
            'user': UserModelSerializer(request.user, many=False).data,
            # 'circles': CircleModelSerializer(circles, many=True).data,
            # 'invitations': InvitationsModelSerializer(invitations, many=True).data
        }
        return Response(data)

    def retrieve(self, request, *args, **kwargs):
        """Add extra data to the response."""
        response = super(UserViewSet, self).retrieve(request, *args, **kwargs)
        # circles = Circle.objects.filter(
        #     members=request.user,
        #     membership__is_active=True
        # )
        data = {
            'user': response.data,
        }
        response.data = data
        return response
