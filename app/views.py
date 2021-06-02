from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.urls import reverse
# Create your views here.
def index(request):
    if request.method=='POST':
        if request.POST.get('submit')=='Login':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=username, password=password)

            if user:
                if user.is_active:
                    login(request, user)
                    return redirect('db')
                else:
                    return render(request, 'index.html', {'error': 'Account not active contact admin'})
            else:
                return render(request, 'index.html', {'error': 'Invalid login credentials'})
        
        elif request.POST.get('submit')=='Sign up':
            username = request.POST['username']
            email = request.POST['email']
            password1 = request.POST['pass']
            password2 = request.POST['cpass']

            if password1 == password2:
                if User.objects.filter(username=username).exists():
                    # print("USER EXIST")
                    return render(request, 'index.html', {'error': 'Username already taken'})
                elif User.objects.filter(email=email).exists():
                    return render(request, 'index.html', {'error': 'Email already taken'})
                    # print("EMAIL ALREADY EXIST")
                else:
                    user = User.objects.create_user(
                        username=username, email=email, password=password1)
                    user.set_password(password1)
                    user.save()
                    # print("USER CREATED")
                    user = authenticate(username=username, password=password1)
                    login(request, user)
                    return redirect('db')
            else:
                # print("INCORRECT PASSWORD")
                return render(request, 'index.html',  {'error': 'Password not matching'})
    else:
        if request.user.is_authenticated:
            return redirect('db')
        else:
            return render(request,'index.html')



@login_required(login_url='index')
def dashboard(request):
        return render(request, 'dashboard.html')

#OLD CODE 

# def user_login(request):
#     if request.method == 'POST':
#         username=request.POST.get('username')
#         password=request.POST.get('password')
#         user=authenticate(username=username, password=password)

#         if user:
#             if user.is_active:
#                 login(request, user)
#                 return redirect('db')
#             else:
#                 return render(request, 'login.html', {'error': 'Account not active contact admin'})
#         else:
#             return render(request, 'login.html', {'error': 'Invalid login credentials'})
#     else:
#         if request.user.is_authenticated:
#             return redirect('db')
#         else:
#             return redirect('index')

# def user_register(request):
#     if request.method == 'POST':
#         username=request.POST['username']
#         email=request.POST['email']
#         password1=request.POST['pass']
#         password2=request.POST['cpass']
        
#         if password1==password2:
#             if User.objects.filter(username=username).exists():
#                 print("USER EXIST")
#                 return render(request, 'register.html',{'error':'Username already taken'})
#             elif User.objects.filter(email=email).exists():
#                 return render(request, 'register.html', {'error': 'Email already taken'})
#                 print("EMAIL ALREADY EXIST")
#             else:
#                 user=User.objects.create_user(username=username, email=email, password=password1)
#                 user.set_password(password1)
#                 user.save()
#                 print("USER CREATED")
#                 user = authenticate(username=username, password=password1)
#                 login(request, user)
#                 print("fuuuuuuuuuuuuuuuuucccccccccccccccckkkk this bug is just!!!!")
#                 return redirect(reverse('db', kwargs={"username":username}))
#         else:
#             print("INCORRECT PASSWORD")
#             return render(request, 'register.html',  {'error': 'Password not matching'})

#     return render(request, 'register.html')
