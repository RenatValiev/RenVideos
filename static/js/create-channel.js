let create_channel_form = document.getElementById("create-channel-form")
create_channel_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let create_channel_form = document.getElementById("create-channel-form")
    let form_data = new FormData(create_channel_form)
    fetch('/create-channel', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            alert("Канал успешно создан. Нажмите ok чтобы перейти на его страницу.")
            document.location.replace(`/channel/${document.getElementById('channelName').value}`)
        }
    })
})