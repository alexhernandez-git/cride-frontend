"""Add circle mixin abstract."""

# Django REST Framework
from rest_framework import mixins, viewsets
from rest_framework.generics import get_object_or_404

# Models
from cride.circles.models import Circle


class AddCircleMixin(viewsets.GenericViewSet):
    """Add circle mixin

    Manages adding a circle object to views
    that require it.
    """

    def dispatch(self, request, *args, **kwargs):
        """Return the normal dispatch but adds the circle model."""

        slug_name = self.kwargs['slug_name']

        self.circle = get_object_or_404(
            Circle,
            slug_name=slug_name
        )

        return super(AddCircleMixin, self).dispatch(request, *args, **kwargs)
