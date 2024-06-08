/**
 * First Class Function🚊🚆
 * 
 * A programming language is said to have First-class functions if functions in that language are treated like other variables. 
 * So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
 * -- Souce: Repo Article
 */

// 01
// const greetMessage = function (){
//     console.log("Hello Ujjwal Jha welcome to Repo!!!");
// }

// greetMessage();

// 02

// function wrapper(){
//     return "welcome to Repo";
// }

// function greetMessage(inner, name){
//     let message = inner();
//     console.log(name, message);
// }

// greetMessage(wrapper, "Ujjwal Jha");

// 03

function greetMessage(){
    function wrapper(){
        let name = "Ujjwal Jha"
        console.log(name, "welcome to Repo!!!!");
    }

    return wrapper
}

const output = greetMessage();
output();

greetMessage()();


