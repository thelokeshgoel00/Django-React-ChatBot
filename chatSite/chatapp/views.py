from django.shortcuts import render
from django.http import Http404, JsonResponse

# Create your views here.


def HomePage(request):
    return render(request, 'index.html', {'q': "Hello"})


def chatHandler(request):
    data = {"reply": "Yes its working"}
    return JsonResponse(data)
