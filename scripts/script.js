

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
