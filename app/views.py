from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, 'index.html')

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')

def user_login(request):
    if request.method == 'POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return redirect('db')
            else:
                return HttpResponse("Account not active")
        else:
            return HttpResponse("INVALID details")
    else:
        return render(request, 'login.html')

