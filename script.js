const inputTexto = document.getElementById('inputTexto');
const outputTexto = document.getElementById('outputTexto');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar = document.getElementById('copiar');

const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function validarTexto(texto) {
    const valido = /^[a-z\s]+$/g.test(texto);
    return {
        valido: valido,
        mensaje: valido ? '' : 'Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.'
    };
}

encriptar.addEventListener('click', () => {
    const validacion = validarTexto(inputTexto.value);
    if (validacion.valido) {
        outputTexto.value = encriptarTexto(inputTexto.value);
    } else {
        alert(validacion.mensaje);
        outputTexto.value = '';
    }
});

desencriptar.addEventListener('click', () => {
    const validacion = validarTexto(inputTexto.value);
    if (validacion.valido) {
        outputTexto.value = desencriptarTexto(inputTexto.value);
    } else {
        alert(validacion.mensaje);
        outputTexto.value = '';
    }
});

copiar.addEventListener('click', () => {
    outputTexto.select();
    document.execCommand('copy');
});

function encriptarTexto(texto) {
    let encriptado = texto.replace(/[eioua]/g, letra => reglas[letra]);
    return encriptado;
}

function desencriptarTexto(texto) {
    let desencriptado = texto;
    for (let letra in reglas) {
        desencriptado = desencriptado.split(reglas[letra]).join(letra);
    }
    return desencriptado;
}