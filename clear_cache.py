"""Этот скрипт отчистит кеш, созданный при генерации постеров"""

import os

print("Этот скрипт отчистит кеш, созданный при генерации постеров")
# Запрашиваем у пользователя согласие на отчистку кеша
print("Вы точно хотите отчистить кеш? (Y/n): ", end='')
answer = input()
if answer == 'n':
    print("Выход...")
    exit()
# Получаем список кешированных видео
cached_videos = os.listdir('./media/cached_videos')
# Получаем список кешированных постеров
cached_posters = os.listdir('./media/cached_posters')

# Удаляем кешированные видео
for video in cached_videos:
    os.remove(f'./media/cached_videos/{video}')

# Удаляем кешированные постеры
for poster in cached_posters:
    os.remove(f'./media/cached_posters/{poster}')

print("Кеш успешно отчищен.")
