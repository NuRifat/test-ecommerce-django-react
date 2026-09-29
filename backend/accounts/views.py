from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework.permissions import IsAuthenticated


class RegisterView(APIView):

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user.role == 'seller':
                message = 'Seller account created. Waiting for admin approval.'
            else:
                message = 'Customer account created successfully.'
            return Response(
                {'message': message},
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            'id': request.user.id,
            'email': request.user.email,
            'role': request.user.role,
        })