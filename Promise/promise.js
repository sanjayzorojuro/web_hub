let prom1 = new Promise((resolve, reject) => {
    a = Math.random();
    if (a < 0.5) {
        reject("you are rejected 1")
    }
    else {
        setTimeout(() => {
            console.log("bye resolved 1")
            resolve("ok bye 1")
        }, 2000)
    }
})

let prom2 = new Promise((resolve, reject) => {
    a = Math.random();
    if (a < 0.5) {
        
        reject("you are rejected 2")
    }
    else {
        setTimeout(() => {
            console.log("bye resolved 2")
            resolve("ok bye 2")
        }, 4000)
    }
})

let prom3 = new Promise((resolve, reject) => {
    a = Math.random();
    if (a < 0.5) {
        
        reject("you are rejected 3")
    }
    else {
        setTimeout(() => {
            console.log("bye resolved 3")
            resolve("ok bye 3")
        }, 3000)
    }
})

let p4=Promise.all([prom1,prom2,prom3])
p4.then((a)=>{
    console.log(a)

}).catch((err)=>{
    console.log(err)
    
})


// promises are we are saying that the code will executes we are making a promise for a code execution 
// the prommise may be resolve or reject but it always executes 
// we can use set interval and set timeout to give delay or repeat the process