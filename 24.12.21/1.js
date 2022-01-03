function tweet() {

    let prevdiv = document.querySelector("div");

    let prevtag = prevdiv.innerHTML;


    let newtag = `<h1>Hello World</h1>`

    prevdiv.innerHTML = `${newtag}${prevtag}`
}