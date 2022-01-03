let list = [
    { dt : 1640845800, temp : 20},
    { dt : 1640932200, temp : 22},
    { dt : 1641018600, temp : 23}
];

for(let i of list){
   let date = new Date(i.dt * 1000);
   console.log(date.getDate(), i.temp );
}


// console.log(list[0]);

// let date = new Date();
// console.log(date);
// console.log(date.getDate(),date.getTime() , date.getMonth(), date.getFullYear());

// let date1 = new Date(1641018600 * 1000);
// console.log(date1);

