const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = fancyArray => {
    let domString = "";
    fancyArray.forEach((animal) => {
        domString += `<div class="animal">`;
        domString += `<img src="${animal.imageUrl}">`;
        domString += `<h2>${animal.name}</h2>`;
        domString += `<h3>${animal.number}</h3>`;
        domString += `<div id="button-container">`
        domString += `<button>Escaped</button></div>`;
        domString += `</div>`;
    });
    printToDom(domString, 'card-holder');
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "animals.json");
    myRequest.send();
}

function executeThisCodeIfXHRFails () {
    console.log("something broke")
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
}

startApplication();