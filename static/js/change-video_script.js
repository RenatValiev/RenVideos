let has_changed = false
let video_form_inputs = document.querySelectorAll("input, textarea, select")
for (let i = 0; i < video_form_inputs.length; i++) {
    video_form_inputs[i].addEventListener('change', function (e) {
        has_changed = true
    })
}
let change_video_form = document.getElementById("change-video-form")
change_video_form.addEventListener('submit', function (e) {
    e.preventDefault()
    let form_data = new FormData(this)
    if (has_changed === true) {
        fetch('/change-video', {
            method: 'POST',
            body: form_data
        }).then(response => {
            if (response.ok) {
                alert("Видео успешно изменено. Вы можете перейти на его страницу или продолжить редактирование.")
            } else {
                alert("Ошибка. Повторите ошибку позже.")
            }
        })
    }
    else {
        alert("Невозможно сохранить изменения, они не были внесены")
    }
})