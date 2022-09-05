window.addEventListener("DOMContentLoaded", (event) => {
    getViewConuter();
});

const apiPath = "http://localhost:7071/api/GetResumeCounter";

const getViewConuter = () => {
    fetch(apiPath).then(response => {
        return response.json();
    }).then(response => {
        console.log("API called to get counter!");
        document.getElementById("counter").innerText = response.count;
    }).catch(error => {
        console.log(error);
    });
}