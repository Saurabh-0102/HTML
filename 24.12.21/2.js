function tweet() {

    let maindiv = document.querySelector("#parent");

    let mainval = maindiv.innerHTML;


    let serval = document.querySelector("#search").value;

    if (serval.length > 3) {

        let newstr = `<div class="alert alert-secondary mb-1">${serval}</div>`;

        maindiv.innerHTML = ` ${mainval} ${newstr}`

        document.querySelector("#search").value = "";

        document.querySelector("#search").classList.remove("border-danger");

    }
    else {
        document.querySelector("#search").classList.add("border-2");
        document.querySelector("#search").classList.add("border-danger");
    }

}

function valid() {
    if (serval.length > 3) {
        document.querySelector("#search").classList.remove("border-danger");
    }
}