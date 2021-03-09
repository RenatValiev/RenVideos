from django.urls import path
from . import views

urlpatterns = [
    path('video/<str:name>', views.VideoView.as_view(), name="video"),
    path('channel/<str:name>', views.ChannelView.as_view(), name='channel'),
    path('comment', views.AddCommentView.as_view(), name='comment'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('upload-video', views.UploadVideoView.as_view(), name='upload-video'),
    path('search', views.Search.as_view(), name='search'),
    path('create-channel', views.CreateChannel.as_view(), name='create-channel'),
    path('drop-channel', views.DropChannel.as_view(), name='drop-channel'),
    path('drop-video', views.DropVideo.as_view(), name='drop-video'),
    path('change-video-page/<str:video>', views.ChangeVideoPage.as_view(), name='change-video'),
    path('change-video', views.ChangeVideo.as_view()),
    path('change-channel-page/<str:channel>', views.ChangeChannelPage.as_view(), name='change-channel'),
    path('change-channel', views.ChangeChannel.as_view()),
    path('like', views.LikeVideo.as_view()),
    path('subscribe', views.Subscribe.as_view()),
    path('', views.IndexView.as_view(), name="index")
]