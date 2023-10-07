
function incrementVisitCount() {
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem('visitCount', count.toString());
    document.getElementById('visitCount').textContent = count;
}


function resetVisitCount() {
    localStorage.setItem('visitCount', '0');
    document.getElementById('visitCount').textContent = '0';
}


if (localStorage.getItem('visitCount') === null) {
    localStorage.setItem('visitCount', '0'); 
} else {
    incrementVisitCount();
}


document.getElementById('resetButton').addEventListener('click', resetVisitCount);




// contato

function Enviar() {
    var Nome = document.getElementById("Nome");

    if (Nome.value != "") {
        alert('Sua mensagem foi enviada com sucesso!')
    }
}



// testes

const editButton = document.getElementById("edit-button");

editButton.addEventListener("click", () => {
    // Adicione código para abrir um formulário de edição ou realizar outras ações de edição.
    alert("Cliquei no botão de editar perfil!");
});


function clicar