from django.db import models
from django.contrib.auth.models import User


class Channel(models.Model):
    """Канал"""
    name = models.CharField("Название канала", max_length=150)
    description = models.TextField("Описание канала")
    owner = models.ForeignKey(User, verbose_name="Владелец канала", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
        # return self.owner.username + ": " + self.name

    class Meta:
        verbose_name = "Канал"
        verbose_name_plural = "Каналы"


class Category(models.Model):
    """Категории видео"""
    name = models.CharField("Название категории", max_length=150)
    description = models.TextField("Описание категории")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Video(models.Model):
    """Видео"""
    name = models.CharField("Название видео", max_length=150, unique=True)
    description = models.TextField("Описание видео")
    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.CASCADE)
    channel = models.ForeignKey(Channel, verbose_name="Канал", on_delete=models.CASCADE)
    video = models.FileField("Видео", upload_to="videos/videos/")
    poster = models.ImageField("Постер", upload_to="videos/posters")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Видео"
        verbose_name_plural = "Видео"


class Comment(models.Model):
    """Комментарий к видео"""
    user = models.ForeignKey(User, verbose_name="Пользователь", on_delete=models.CASCADE)
    text = models.TextField("Текст")
    video = models.ForeignKey(Video, verbose_name="Видео", on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + ": " + self.video.name

    class Meta:
        verbose_name = "Комментарий"
        verbose_name_plural = "Комментарии"
