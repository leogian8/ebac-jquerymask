const form = document.getElementsById('formulario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.lenght >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeFormulario = document.getElementById('nome');
    if (!validaNome(nomeFormulario.value)) {
        alert("O nome nao esta completo !")
    }
})