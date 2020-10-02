from django.shortcuts import render
from django.http import Http404
# Create your views here.


def HomePage(request):
    return render(request, 'index.html', {'q': "Hello"})
