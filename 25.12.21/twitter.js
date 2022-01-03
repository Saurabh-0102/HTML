function tweet() {
    let prevtag = document.querySelector("#para");

    let prev = prevtag.innerHTML;

    let ip = document.querySelector("#input").value;

    console.log(ip);

    let newtag = ` <div class="col">
    <div class="col alert alert-info">${ip}
        <div class="d-flex gap-2">
            <div class="d-flex gap-2 mt-1">
                <span onclick="increment(this)">&#128077;</span>
                <span>0</span>
            </div>
            <div class="d-flex gap-2 mt-1">
                <span onclick="decrement(this)">&#128078;</span>
                <span>0</span>
            </div>
        </div>
    </div>
</div>`

    prevtag.innerHTML = prev + newtag;

    document.querySelector("#input").value ="";
}

function increment(arg) {

    let val = arg.parentElement.children[1];

    let preval = val.innerHTML;

    let newval = parseInt(preval) + 1;

    val.innerHTML = newval;

}

function decrement(arg) {

    let val = arg.parentElement.children[1];

    let preval = val.innerHTML;

    let newval = parseInt(preval) + 1;

    val.innerHTML = newval;

}
