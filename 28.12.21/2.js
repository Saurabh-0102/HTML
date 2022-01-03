
async function getdata() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    

    const res = await fetch(url);
    const list = await res.json();
    console.log(list);

    const parent = document.querySelector("#parent");


    for (let item of list) {
    let value = item.title;
    const prevchild = parent.innerHTML;

    const newchild = `<p>${item.title}</p>`;

        parent.innerHTML = newchild + prevchild;

        // console.log(item.title);
    }
}