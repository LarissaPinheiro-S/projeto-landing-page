function escondeSenha (event) {
    event.preventDefault()
    const input = document.getElementById("password")
    input.setAttribute("type", "password")
    console.log(input)
}

function enviaResposta () {
const nome = document.getElementById('nome').value
const sobrenome = document.getElementById('sobrenome').value
const email = document.getElementById('email').value
    if (!nome || !sobrenome || !email ) {
        alert('Atenção, preencha os campos em branco')
    } else {
        alert("Olá "+ nome +" "+ sobrenome + ". Entraremos em contato pelo e-mail" + " " + email + ". " + "Até breve!")
    } 
}

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function adicionaFoto1 (event){
   document.getElementById("img1").src="./foto1.jpg"
   }

 function adicionaFoto2 (event){
   document.getElementById("img1").src="./foto2.jpg"
    }

 function adicionaFoto3 (event){
    document.getElementById("img1").src="./foto3.jpg"
    }

 function adicionaFoto4 (event){
    document.getElementById("img1").src="./foto4.jpg"
    }

 function adicionaFoto5 (event){
    document.getElementById("img1").src="./foto5.jpg"
    }

 function adicionaFoto6 (event){
    document.getElementById("img1").src="./foto6.jpg"
    }
        
