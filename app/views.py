from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.urls import reverse
# Create your views here.
def index(request):
    return render(request, 'index.html')

@login_required(login_url='login')
def dashboard(request, message=None):
        if message==None:
            print(message+"messsssssssssssssssssssssssssssssssssssssssssssssssss")
            return render(request, 'dashboard.html')
        else:
            print(message+"messsssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
            return render(request, 'dashboard.html',{'message':f'Hello {message["args"]} you have been registred successfully'})

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
                return render(request, 'login.html', {'error': 'Account not active contact admin'})
        else:
            return render(request, 'login.html', {'error': 'Invalid login credentials'})
    else:
        if request.user.is_authenticated:
            return redirect('db')
        else:
            return render(request, 'login.html')

def user_register(request):
    if request.method == 'POST':
        username=request.POST['username']
        email=request.POST['email']
        password1=request.POST['pass']
        password2=request.POST['cpass']
        
        if password1==password2:
            if User.objects.filter(username=username).exists():
                print("USER EXIST")
                return render(request, 'register.html',{'error':'Username already taken'})
            elif User.objects.filter(email=email).exists():
                return render(request, 'register.html', {'error': 'Email already taken'})
                print("EMAIL ALREADY EXIST")
            else:
                user=User.objects.create_user(username=username, email=email, password=password1)
                user.set_password(password1)
                user.save()
                print("USER CREATED")
                user = authenticate(username=username, password=password1)
                login(request, user)
                print("looooooooooooooooooooooooooooooooog")
                return redirect(reverse('db', kwargs={"username":username}))
        else:
            print("INCORRECT PASSWORD")
            return render(request, 'register.html',  {'error': 'Password not matching'})

    return render(request, 'register.html')
