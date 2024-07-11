const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

document.getElementById("main-img").innerHTML = `<img src="${images[0].image}"></img>`


for (let i = 0; i < images.length; i++) {
    document.getElementById("container-side-img").innerHTML += `<img src="${images[i].image}" id="img-${i}"></img>`
}

let active = 0
let active_img = document.getElementById("img-" + active)
active_img.classList.add("active")
console.log(active_img)

document.getElementById("caret-down").addEventListener("click", function () {
    let prev_active = active;
    active = (active + 1) % images.length;

    document.getElementById("img-" + prev_active).classList.remove("active");
    document.getElementById("img-" + active).classList.add("active");

    console.log("active ora vale:", active);
});

document.getElementById("caret-up").addEventListener("click", function () {
    let prev_active = active;
    active = (active - 1 + images.length) % images.length;

    document.getElementById("img-" + prev_active).classList.remove("active");
    document.getElementById("img-" + active).classList.add("active");

    console.log("active ora vale:", active);
});
