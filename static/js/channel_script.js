let video_form = document.getElementById("video-form")
video_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let video_form = document.getElementById("video-form")
    let form_data = new FormData(video_form)
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