
async function getupdate() {

    let city = document.querySelector("#input").value;

    let key = `c303cf6a4b5523f432fbec616070ab15`;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;


    const res = await fetch(url);

    // console.log(res);

    // console.log(url);    
    const fin = await res.json();

    // console.log(fin.main.temp);

    let parenttag = document.querySelector("#parent");

    let prevtag = parenttag.innerHTML;

    console.log(parenttag);

    let newtag = `<h1>${city}${fin.main.temp}</h1>`;


    parenttag.innerHTML = newtag;


}