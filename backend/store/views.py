from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)

class ProductDetailView(APIView):

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product)

        return Response(serializer.data)

class CategoryListView(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)

class CategoryProductsView(APIView):

    def get(self, request, pk):
        category = Category.objects.get(id=pk)
        products = Product.objects.filter(
            category__parent=category
        )
        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)