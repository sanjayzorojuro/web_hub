function rand (x,y,z){
    let random=Math.floor(Math.random()*3)
    if(random==0){
        return x;
    }
    else if(random==1)
    {
        return y;
    }
    else{
        return z;
    }
}


console.log(rand("crazy","amazing","fire")+rand("engine","food","fire")+rand("bros","limited","hub"))