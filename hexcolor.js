

function atickvai() {

    let ary = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "a" , "b" , "c" , "d" , "e" , "f"]

    let hash = "#"

    for (let w = 0; w < 6; w++) {
        
        let random = Math.round( Math.random() * 15);

        let random2 = ary[random]

        hash = hash + random2;
    }
    
    document.querySelector("#wrapper").style.background = hash;
    document.querySelector("#code").innerHTML = hash;
}

