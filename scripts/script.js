
let projects = [
    {
        name: "Pokeinfo",
        img: "C:/Users/Usuario/Desktop/portfolio/assets/projects/pokeinfo.png",
        description: "Um catálogo de pokémons",
        tools: "Angular, Typescript, Bootstrap, API PokeAPI"
    },
    {
        name: "Gerenciador de Almoxarifado",
        img: "C:/Users/Usuario/Desktop/portfolio/assets/projects/gerenciador-almoxarifado.png",
        description: "Um Gerenciador de almoxarifado",
        tools: "Angular,Typescript, Angular Material, Firebase"
    }
];

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

function Project(name, img, description, tools) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.tools = tools;
}
    document.getElementById("projects-cards").innerHTML = projects.map(function (project) {
        return `<div class="project-card">
        <h3 class="project-name">${project.name}</h3>
        <img class ="project-img" src="${project.img}">
        </div>`;
    })

console.log(projects)

