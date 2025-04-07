async function hari(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(700)
        }, 3000);
    })

}

async function nishu(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(770)
        }, 5000);
    })

}
async function main(){
    console.log("dunk")

    console.log("duke_dennies")

    let x= await hari()
    console.log(x)

    console.log("kai_cennet")
    console.log("skibidi")
    console.log("gyayt")

    let z=await nishu()
    console.log(z)

    console.log("fanum tax")
}
main()

// so async await is used to waite for the data to get form the server.
// async function is used to control the flow of data or script
// it is used particulary while using promises , by using async function we can contol the flow of the code
// if we use await while calling function then the code which is written next to the await will not run until and when the function id resolved
