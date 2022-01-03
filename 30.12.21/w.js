const getweather = async () => {

    let city = document.querySelector("#input").value || "Pune";
    let appid = "c303cf6a4b5523f432fbec616070ab15";
    let unit = "metric";
    // let count = 5;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appid}`;

    let res = await fetch(url);
    let result = await res.json();

    // console.log(result.main.temp);

    let parent = document.querySelector("#parent");
    let child = parent.innerHTML;
    let newchild = `<h3> ${city}-${result.main.temp}</h3>`;

    parent.innerHTML = newchild + child;

}