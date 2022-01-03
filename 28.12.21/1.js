
async function getdata() {

    const url = 'https://jsonplaceholder.typicode.com/posts';


    const res = await fetch(url);
    const list = await res.json();
    console.log(list);

    for (let item of list) {
        console.log(item.title);
    }
}