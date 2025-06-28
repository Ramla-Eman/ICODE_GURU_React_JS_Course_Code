function calculate(a,b, callback){
    let result = a + b;
    callback(result);
}

function display(data){
    console.log(`Result is ${data}`);
}



// calculate(8, 3, display)

// const promise = new Promise((resolve, reject)=> {
//     let success = false;
//     success ? resolve("sucess") : reject("reject")
// })

// promise.then((data) => {
//     console.log(data)
// }).catch((error)=> {
//     alert(error)
// })

// function delayGreat(name, callback){
//     setTimeout(() => {
//         console.log(`Hello ${name}`)
//         callback();
//     }, 2000)
// }

// delayGreat("Asad Ullah", ()=> {
//     console.log("welcome");
// })

