document.addEventListener('DOMContentLoaded', function () {
    fetch('https://exchangeratesapi.io/')
        .then(response => {
            return response.json()
        }).then(data => console.log(data))
});