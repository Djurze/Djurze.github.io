const body_text = document.getElementById("body_text");

let sitename = "https://djurze.github.io/ https://github.com/Djurze";

const request = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.4699&lon=7.1994";

const Useragent = {
    "User-Agent": sitename,
};

let response = await fetch(request, {
    headers: {
        "User-Agent": sitename
    }
});

if (response.ok) {
    let json = await response.json();
    body_text.innerText = json;
} else {
    alert("HTTP-Error: " + response.status);
}

