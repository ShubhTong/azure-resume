window.addEventListener("DOMContentLoaded", (event) => {
    getViewConuter();
});

const apiPath_Deployed = "https://getreusmecounterazure.azurewebsites.net/api/GetResumeCounter?code=gMXXRvabPzmjTPxqa1324kIxeS411cTdYf2zZR2ktQ_-AzFu-q-BOg==";
const apiPath_Local = "http://localhost:7071/api/GetResumeCounter";

const getViewConuter = () => {
    fetch(apiPath_Local).then(response => {
        return response.json();
    }).then(response => {
        console.log("API called to get counter!");
        document.getElementById("counter").innerText = response.count;
    }).catch(error => {
        console.log(error);
    });
}