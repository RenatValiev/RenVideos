function subscribe(channel_name) {
    let form_data = new FormData()
    form_data.append('channel_name', channel_name)
    form_data.append('csrfmiddlewaretoken', document.querySelector('input[name=csrfmiddlewaretoken]').value)
    fetch('/subscribe', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.ok) {
            if (response.status === 200) {
                alert("Подписка успешно оформлена.")
            } else if (response.status === 201) {
                alert("Подписка успешно ОТМЕНЕНА.")
            }
        } else {
            alert("Ошибка. Проверьте, вошли ли вы в аккаунт или повторите попытку позже.")
        }
    })
}