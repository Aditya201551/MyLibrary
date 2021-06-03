from django.urls import path
from app import views
urlpatterns = [
    path('',views.index, name='index'),
    path('account/',views.form,name='form'),
    # path('dashboard/',views.dashboard, name='db'),
    path('logout/', views.user_logout,name='logout')
]
