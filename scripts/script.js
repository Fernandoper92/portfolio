

let list = document.querySelectorAll('.nav-iten-box');

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'nav-iten-box';
        }
        list[i].className = 'nav-iten-box active'
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myTopnav").style.top = "0";
    } else {
        document.getElementById("myTopnav").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}