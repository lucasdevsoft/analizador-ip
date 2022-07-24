const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a24f04f21dmshc4e56cb10fab36fp11fa8cjsn58d0861733c2',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options)
        .then(res => res.json())
        .catch(err => console.error(err))
}


const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)
    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})