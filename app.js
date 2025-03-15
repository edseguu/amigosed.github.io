// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    if (nombre >= 0 || nombre <= 0){
        alert("Los números no son validos.");
        return;
    }
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!regex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }
    if (nombre.length > 25 ){
        alert("Ingresa un nombre más corto.")
        return;

        
    }
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);
    
    input.value = ""; // Limpiar el campo de entrada
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos").children;
    const resultado = document.getElementById("resultado");

    if (listaAmigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer un sorteo.");
        return;
    }
        // Limpiar resultados anteriores
        resultado.innerHTML = "";

        // Seleccionar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
        // Obtener el nombre del amigo seleccionado
        const amigoSeleccionado = listaAmigos[indiceAleatorio].textContent;
    
        // Mostrar el resultado
        const resultadoItem = document.createElement("li");
        resultadoItem.textContent = `¡El amigo seleccionado es: ${amigoSeleccionado}!`;
        resultado.appendChild(resultadoItem);
}


// Función para reiniciar la lista y los resultados
function reiniciar() {
    // Limpiar la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpiar los resultados del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    console.log("Lista y resultados reiniciados.");
}