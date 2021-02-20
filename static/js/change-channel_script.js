let has_changed = false
let video_form_inputs = document.querySelectorAll("input, textarea")
for (let i = 0; i < video_form_inputs.length; i++) {
    video_form_inputs[i].addEventListener('change', function (e) {
        has_changed = true
    })
}
let change_channel_form = document.getElementById("change-channel-form")
change_channel_form.addEventListener('submit', function (e) {
    e.preventDefault()
    let form_data = new FormData(this)
    if (has_changed === true) {
        fetch('/change-channel', {
            method: 'POST',
            body: form_data
        }).then(response => {
            if (response.ok) {
                alert("Канал успешно изменён. Вы можете перейти на его страницу или продолжить редактирование.")
                let link = document.getElementById("link")
                link.href = `/channel/${document.getElementById('name').value}`
            } else {
                alert("Ошибка. Повторите ошибку позже.")
            }
        })
    }
    else {
        alert("Невозможно сохранить изменения, они не были внесены")
    }
})