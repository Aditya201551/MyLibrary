from django.urls import path
from app import views
urlpatterns = [
    path('',views.index, name='index'),
    path('account/',views.form,name='form'), #login
    path('logout/', views.user_logout,name='logout'), #logout
    path('contact/',views.contact, name='contact'),
    path('feedback/', views.feedback, name='feedback'),
    #cards
    path('books/', views.books, name='books'),
    path('syllabus/',views.syllabus, name='syllabus'),
    path('previousYear/',views.previousYear,name='previousYear'),
    path('shareAssignment/', views.shareAssignment, name='shareAssignment'),
    path('resource/',views.resource,name='resource'),
]
