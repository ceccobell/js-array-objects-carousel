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

document.getElementById("main-img").innerHTML = `<img src="${images[0].image}"></img><div class="p-abs"><h2>${images[0].title}</h2><div>${images[0].text}</div></div>`


for (let i = 0; i < images.length; i++) {
    document.getElementById("container-side-img").innerHTML += `<img src="${images[i].image}" id="img-${i}"></img>`
}

let active = 0
let active_img = document.getElementById("img-" + active)
active_img.classList.add("active")

document.getElementById("caret-down").addEventListener("click", clickCaretDown)

document.getElementById("caret-up").addEventListener("click", clickCaretUp);

document.getElementById("start").addEventListener("click", autoPlay)

document.getElementById("stop").addEventListener("click", removeAutoPlay)

function clickCaretUp() {
    document.getElementById("img-" + active).classList.remove("active")
    active = (active - 1 + images.length) % images.length
    document.getElementById("img-" + active).classList.add("active")

    document.getElementById("main-img").innerHTML = ""
    document.getElementById("main-img").innerHTML =
        `<img src="${images[active].image}"></img>
        <div class="p-abs"><h2>${images[active].title}</h2><div>${images[active].text}</div></div>`
}

function clickCaretDown() {
    document.getElementById("img-" + active).classList.remove("active")
    active = (active + 1) % images.length
    document.getElementById("img-" + active).classList.add("active")

    document.getElementById("main-img").innerHTML = ""
    document.getElementById("main-img").innerHTML =
        `<img src="${images[active].image}"></img>
        <div class="p-abs"><h2>${images[active].title}</h2><div>${images[active].text}</div></div>`
}

let autoplayInterval = 0;

function autoPlay() {
    autoplayInterval = setInterval(clickCaretDown, 3000);
}

function removeAutoPlay() {
    clearInterval(autoplayInterval);
}
