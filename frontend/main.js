window.addEventListener("DOMLoaded", getViewConuter);

const apiPath = "";

const getViewConuter = () => {
    fetch(apiPath).then(response => {
        console.log("Setting up the view counter after api call");
        document.getElementById("counter").innerText = response.json;
    }).catch(error => {
        console.log(error);
    });
}