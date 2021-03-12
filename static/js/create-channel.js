/* Скрипт отправки формы со страницы создания канала */

// Получаем саму форму
let create_channel_form = document.getElementById("create-channel-form")
// Добавляем обработчик отправки формы
create_channel_form.addEventListener('submit', function (e) {
    // Отменяем действие по умолчанию
    e.preventDefault()
    let form_data = new FormData(this)
    fetch('/create-channel', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            alert("Канал успешно создан. Нажмите ok чтобы перейти на его страницу.")
            document.location.replace(`/channel/${document.getElementById('channelName').value}`)
        }
        else {
            alert("Ошибка при создании канала. Попробуйте повторить попытку позже или обратитесь за поддержкой.")
        }
    })
})