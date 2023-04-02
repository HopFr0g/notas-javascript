// Esto debe ejecutarse en un servidor para funcionar

"use strict";

let postCounter = 0;

const postContainer = document.querySelector(".post-container");

const createPostFragment = (username, body, imgurl) => {
    // Elements creation:
    const container = document.createElement("DIV");
    const title = document.createElement("H3");
    const text = document.createElement("P");
    const img = document.createElement("IMG");
    // Class definition:
    container.classList.add("post")
    title.classList.add("post__username");
    text.classList.add("post__body");
    img.classList.add("post__img");
    // Content adding:
    title.innerHTML = username;
    text.innerHTML = body;
    img.setAttribute("src", imgurl);
    // Post assembly:
    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(img);
    // Return fragment:
    return container;
}

/*--------------------- OBSERVER ----------------------*/
const observer = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting)
        loadPosts(1);
});
/*-----------------------------------------------------*/

const loadPosts = async num => {
    const request = await fetch("example.json");
    const obj = await request.json();
    const arr = obj.content;
    
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < num; ++i) {
        if (arr[postCounter] != undefined) {
            // Se agregará un nuevo post al fragmento, solo si no llegamos al final del array con posts:
            const newPost = createPostFragment(arr[postCounter].username, arr[postCounter].body, arr[postCounter].imgurl)
            fragment.appendChild(newPost)
            ++postCounter;
            // Observer:
            if (i == num - 1) {
                observer.observe(newPost);
            }
        } else if (postContainer.lastElementChild.id !== "endreached") {
            // En caso de haber llegado al final del array, creamos un elemento que diga "no hay más posts":
            const endReached = document.createElement("H4");
            endReached.classList.add("bottom");
            endReached.id = "endreached"
            endReached.innerHTML = "No hay más posts para mostrar.";
            fragment.appendChild(endReached);
            break;
        }
    }
    
    postContainer.appendChild(fragment);
}

loadPosts(1);