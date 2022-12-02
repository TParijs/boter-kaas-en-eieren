{let btn = document.createElement("button")

btn.innerHTML = "start";

btn.onclick = function () {

    const result = confirm('do u want to start?');
    if (result) { location.replace(`./index.html`)
}
}

document.body.appendChild(btn);
}



