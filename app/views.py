from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.urls import reverse
from app.models import *
# Create your views here.

def index(request):
        return render(request, 'index.html')


def form(request):
    if request.method=='POST':
        if request.POST.get('submit')=='Login':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=username, password=password)

            if user:
                if user.is_active:
                    login(request, user)
                    return redirect('index')
                else:
                    return render(request, 'form.html', {'error': 'Account not active contact admin'})
            else:
                return render(request, 'form.html', {'error': 'Invalid login credentials'})
        
        elif request.POST.get('submit')=='Sign up':
            username = request.POST['username']
            email = request.POST['email']
            password1 = request.POST['pass']
            password2 = request.POST['cpass']

            if password1 == password2:
                if User.objects.filter(username=username).exists():
                    return render(request, 'form.html', {'error': 'Username already taken'})
                elif User.objects.filter(email=email).exists():
                    return render(request, 'form.html', {'error': 'Email already taken'})
                else:
                    user = User.objects.create_user(
                        username=username, email=email, password=password1)
                    user.set_password(password1)
                    user.save()
                    # print("USER CREATED")
                    user = authenticate(username=username, password=password1)
                    login(request, user)
                    return redirect('index')
            else:
                return render(request, 'form.html',  {'error': 'Password not matching'})
    else:
        if request.user.is_authenticated:
            return redirect('index')
        else:
            return render(request,'form.html')


@login_required(login_url='form')
def user_logout(request):
    logout(request)
    return redirect('index')

@login_required(login_url='form')
def books(request):
    return HttpResponse("<h1>Books</h1>")

@login_required(login_url='form')
def syllabus(request):
    return HttpResponse('<h1>Syllabus</h1>')

@login_required(login_url='form')
def previousYear(request):
    return HttpResponse('<h1>Previous Year</h1>')

@login_required(login_url='form')
def shareAssignment(request):
    return HttpResponse('<h1> Share Assignment </h1>')

def resource(request):
    return HttpResponse("<h1> Resources </h1>")

login_required('form')
def contact(request):
    return HttpResponse("<h1form> Contact us</h1>")

@login_required(login_url='form')
def feedback(request):
    print(request.user.username)
    if request.method == 'POST':
        feedback=request.POST.get('feedbackarea')
        model=Feedback()
        model.user=request.user
        model.feedback=feedback
        model.save()
        return render(request, 'feedback.html')
    else:
        return render(request, 'feedback.html')

def returnBook(request, course, semester, subject):
    model=BookModel.objects.filter(course=course, semester=semester)
    return render(request, 'books.html', {
        "model":model,
        'course':course,
        'semester':semester,
        'subject':subject,
    })