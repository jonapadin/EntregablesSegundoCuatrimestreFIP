"use strict"
let url = "https://dragonball-api.com/api/characters?page=0&limit=21";

let contenedor = document.getElementById("contenedor")

async function obtenerPersonajes() {
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        
        data.items.forEach(personaje => {
            contenedor.innerHTML += `<div class="card">
                                    <img src="${personaje.image}" alt="${personaje.name}">
                                    <h1>Personaje: ${personaje.name}</h1>
                                    <p>Raza: ${personaje.race}</p>
                                    <p>KI: ${personaje.ki}</p>
                                    <p>Descripción: ${personaje.description}</p>
                                    </div>`;
        });
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        contenedor.innerHTML = "<p>Error al cargar los personajes. Por favor, intente nuevamente más tarde.</p>";
    }
}

obtenerPersonajes();