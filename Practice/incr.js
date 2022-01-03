

function incr(para){
    let oldval = document.querySelector("#main");

    let val = oldval.innerHTML;

    let newval = parseInt(val)+ 1;

    oldval.innerHTML = newval;
}

function decr(){


    let oldtag = document.querySelector("#main");

    let val = oldtag.innerHTML;

    if(val > 0){
    let newval = parseInt(val) - 1;

    oldtag.innerHTML = newval;
    }
}

var person = {
    "firstname" : "saurabh",
    "lastname" : "jharia",
    "location" : "jabalpur"
};

console.log(person.firstname);
console.log(person.lastname);




