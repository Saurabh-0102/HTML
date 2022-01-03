let obj = {
    id : 1,
    username : "saurabh",
    address : {
        city : "jabalpur",
        state : "M.P."
    }
};

//Accessing the nested members
console.log(obj.address);
console.log(obj.address.city);

// adding pincode at nested member of address

obj.address.pincode = "482020";

console.log(obj.address);
