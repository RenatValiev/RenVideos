"""Скрипт, который сгененирует надёжный ключ и заменит им слова insert-secret-key-here в файле настроек проекта.
Рекомендуется выполнить перед использованием. Должен находится в корневой директории проекта """

# Импортируем нужные библиотеки
import random
import string
import hashlib
import os

# Выводим краткое описание
print("Этот скрипт сгенерирует и вставит в файл настроек проекта django секретный ключ. Подробнее смотреть в "
      "комментарии в начале файла")
# Генерируем токен
token = "".join(random.choice(string.ascii_letters) for x in range(16))
token = hashlib.sha256(token.encode('utf-8')).hexdigest()
# Пробуем найти путь к файлу настроек в автоматическом режиме
try:
    # Получаем предполагаемый путь
    path = os.getcwd() + '/' + os.getcwd().split('/')[-1] + '/settings.py'
    # Пробуем открыть файл
    data = open(path, 'r').read()
    # Если получилось, то путь удачный
    success_path = True
except:
    # Если не получилось, то путь не удачный
    success_path = False
# Пока не найден удачный путь
while not success_path:
    try:
        # Получаем путь к файлу от пользователя
        print("Введите путь к файлу настроек:", end='')
        path = input()
        # Проверяем его
        data = open(path, 'r').read()
        # Если норм, то путь успешный
        success_path = True
    except:
        # Если нет, то сообщаем об этом
        print('\nНеверный путь к файлу')
# Вставляем ключ
data = data.replace('insert-secret-key-here', token)
# Записываем изменения
open(path, 'w').write(data)
print("\nКлюч успешно вставлен.")
