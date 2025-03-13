var a =prompt("please enter a number:")
var o=prompt("enter a operator")
var b=prompt("enter second number")

let random=Math.random()

let z={
"+":"-",
"-":"*",
"*":"/",
"/":"**"

}

if(random<0.1)
{
  o= z[o]
  alert(`result is: ${eval(`${a} ${o} ${b}`)}`)
}
else{
    alert(`result is: ${eval(`${a} ${o} ${b}`)}`)

}