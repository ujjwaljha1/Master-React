/**
 * Optional Chaining 😎😎 ?.
 */

const user = {
    name: "Ujjwal Jha",
    age: 99,
    address: { // optional
        street: "Kalina",
        city: "Mumbai"
    },
    likes: "Eat Sing Sleep Repeat",
    getDisplayMessage: function () {
        console.log("Welcome Ujjwal Jha")
    }
}

// Sol 01

// if (user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("address not found")
// }

// Sol 2
console.log(user.address?.city);

// user.getDisplayMessage();
// console.log(user.getDisplayAddress?.());

console.log(user.hobbies);
