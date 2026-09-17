from django.http import JsonResponse

# Create your views here.
def home(request):
    data ={
        'message': "Welcome to Ecommerce Store"
    }
    return JsonResponse(data)