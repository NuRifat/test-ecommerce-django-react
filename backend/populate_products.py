import os
import django
from urllib.request import urlopen
from django.core.files import File
from io import BytesIO

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from store.models import Category, Product


products = [
    {
        "name": "Classic Cotton Shirt",
        "description": "Comfortable cotton shirt for everyday wear.",
        "price": 1500,
        "category": "Men's Shirt",
    },
    {
        "name": "Premium Casual Shirt",
        "description": "Premium casual shirt with a modern design.",
        "price": 1800,
        "category": "Men's Shirt",
    },
    {
        "name": "Slim Fit Denim Jeans",
        "description": "Comfortable slim fit denim jeans.",
        "price": 2200,
        "category": "Men's Pant",
    },
    {
        "name": "Classic Men's Pant",
        "description": "Comfortable formal pant for everyday use.",
        "price": 2000,
        "category": "Men's Pant",
    },
    {
        "name": "Women's Casual Shirt",
        "description": "Stylish casual shirt for women.",
        "price": 1600,
        "category": "Women's Shirt",
    },
    {
        "name": "Women's Formal Shirt",
        "description": "Elegant formal shirt for women.",
        "price": 1900,
        "category": "Women's Shirt",
    },
    {
        "name": "Women's Cotton Pant",
        "description": "Comfortable cotton pant for women.",
        "price": 2100,
        "category": "Women's Pant",
    },
    {
        "name": "Women's Denim Pant",
        "description": "Modern denim pant with a comfortable fit.",
        "price": 2400,
        "category": "Women's Pant",
    },
    {
        "name": "Samsung Galaxy Smartphone",
        "description": "Modern Android smartphone with a high quality display.",
        "price": 45000,
        "category": "Mobile Phone",
    },
    {
        "name": "Smart Watch Series 1",
        "description": "Smart watch with fitness and notification features.",
        "price": 3500,
        "category": "Watch",
    },
]


for product_data in products:
    category = Category.objects.get(name=product_data["category"])

    Product.objects.create(
        name=product_data["name"],
        description=product_data["description"],
        price=product_data["price"],
        category=category,
    )

print("Products added successfully!")