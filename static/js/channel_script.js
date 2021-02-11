let video_form = document.getElementById("video-form")
video_form.addEventListener('submit', function (e) {
    e.preventDefault()
    let form_data = new FormData(this)
    fetch('/upload-video', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            alert("ok")
        } else {
            alert("error")
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