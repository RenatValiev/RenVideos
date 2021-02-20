let video_form = document.getElementById("video-form")
video_form.addEventListener('submit', function (e) {
    e.preventDefault()
    setTimeout(() => {alert("Началась загрузка видео. Не закрывайте страницу, пока не появится сообщение об успешном завершении операции. Нажмите ok")}, 1)
    let form_data = new FormData(this)
    fetch('/upload-video', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            alert("Видео успешно загружено. Обновите страницу, чтобы увидеть его.")
        } else {
            alert("Возникла ошибка. Повторите попытку позже.")
        }
    })
})

let drop_channel_form = document.querySelector('form[id=drop-channel-form]')
drop_channel_form.addEventListener("submit", function (e) {
    e.preventDefault()
    let form_data = new FormData(this)
    fetch('/drop-channel', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            alert("Канал успешно удалён.")
            document.location.replace('/')
        }
        else {
            alert("Ошибка при удалении канала. Повторите попытку позже.")
        }
    })
})