let form = document.getElementById("generate-poster-form")
console.log(form)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let form_data = new FormData(this)
    fetch('/generate-poster', {
        method: 'POST',
        body: form_data
    }).then(response => {
        if (response.status === 200) {
            response.text().then(text => {
                let div = document.createElement('div')
                div.innerHTML = `
                    <img src="${text}" alt="сгенерированный постер" class="mt-2" width="50%">
                    <a href="${text}" class="btn btn-outline-success mt-2" download>Скачать</a>
                `
                let form = document.getElementById("generate-poster-form")
                form.append(div)
            })
        } else if (response.status === 201) {
            alert("Вы не вошли в аккаунт. Сделайте это, чтобы сгенерировать постер")
        } else if (response.status === 202) {
            alert("Видео короче выбранного вами времени генерации кадра. Выберите меньшее время.");
        } else {
            alert("Ошибка. Повторите попытку позже.")
        }
    })
})