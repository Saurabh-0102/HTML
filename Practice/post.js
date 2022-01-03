

async function getdata(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    const res = await fetch(url);
    const list = await res.json();

   console.log(list); 
    
    // for(let n=0; n<5;n++){
    //     console.log(list)
    // }
}