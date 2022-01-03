
function validateform(){
    let name = document.querySelector("#input").value;
    // console.log(name);
    if(name.length==""){
        let parent = document.querySelector(".error");
        let preval = parent.innerHTML;
        let newval = `*Error`;
        parent.innerHTML = newval;
    }



}


