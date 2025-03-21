function createcard(title, cname, views, monthsold, duration, thumnail) {
    let views2;
    if (views < 1000000) {
        views2 = views / 1000 + "k";
    }
    else if (views > 1000000) {
        views2 = views / 1000000 + "M"
    }
    // else{
    //     views2=views/1000+"k";
    // }
    let html = ` <div class="card">
            <div class="image">
                   <img
                    src="${thumnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>
                    ${cname} . ${views2} views . ${monthsold} months ago
                </p>
            </div>
        </div> `

    
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}

createcard("Introduction to backend|by sanjay","alphawithcode",56000000,9,"25:36","https://i.ytimg.com/an_webp/ZQBrjVvqhD0/mqdefault_6s.webp?du=3000&sqp=CPCc874G&rs=AOn4CLBGZ7NONruE5b2LnRgezIrTNb1r6Q")