let obj = {};

let list = [];

let list1 = ["jabalpur","delhi","chennia"];

//getting the length of an array
console.log(list1.length);

//accessing the members of array
// console.log(list1[0]);

//adding new element to array
list1[3] = "jammu";
//or
list1.push("surat");

//for removing an element based on stack
list1.pop();

list1.unshift("barela");

list1.push("kanyakumari");

//adding element anywhere

list1.splice(2,0,"chalisgaon");//0 if you want to delete the previous element

//deleting a specific element
list1.splice(2,1);

for(let i=0;i<list1.length;i++){
    console.log(list1[i]);
}

console.log(list1);

