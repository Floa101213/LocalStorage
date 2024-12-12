
function ValidaEmmail(email) {
    const regex = /\S+@\S+\.\S+/;
return regex.text(email);

}

let chave = "Nome 1";
let chave1 = "Curso 1";
let i = 0;

function ArmazenaDados() 
{

    localStorage.setItem(chave, document.getElementById("Nome 1").value);
    localStorage.setItem(chave1, document.getElementById("Curso 1").value);
    LimparCampos();
}


function ConsultaDados()
{
    document.getElementById("resultado").innerHTML = localStorage.getItem("Nome 1") + " - " + localStorage.getItem("Curso 1");
}



function AtualizaDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave1, document.getElementById("curso").value);
}


function LimparCampos()
{
    document.getElementById("nome").value = "";
    document.getElementById("curso").value = "";
}


function insertData(){

    i = i + 1;
    localStorage.setItem("Nome " + i , document.getElementById("nome").value);
    localStorage.setItem("Curso " + i , document.getElementById("curso").value);
    LimparCampos();
}

function ViewAllData()
{
    let resultado = "";

    for(let indice = 1; indice <= i; indice++)
    {
        resultado += localStorage.getItem("Nome " + indice) + " - " + localStorage.getItem("Curso " + indice) + "<br>";
    }

document.getElementById("resultado").innerHTML = resultado;
}

function DeleteData(){

    localStorage.removeItem("Nome " + document.getElementById ("indice").value);
    localStorage.removeItem("Email " + document.getElementById ("indice").value);
    document.getElementById("indice").value + "";
}




// function ValidaEmmail(email) {
//     const regex = /\S+@\S+\.\S+/;
// return regex.text(email);

// }

// let chave = "Nome 1";
// let chave2 = "Curso 1";
// let chave3 = "Ano 1";
// let i = 0;

// function ArmazenaDados() 
// {

//     localStorage.setItem(chave, document.getElementById("nome").value);
//     localStorage.setItem(chave2, document.getElementById("Curso").value);
//     localStorage.setItem(chave2, document.getElementById("Ano").value);
//     LimparCampos();
// }


// function ConsultaDados()
// {
//     document.getElementById("resultado").innerHTML = localStorage.getItem("Nome 1") + " - " + localStorage.getItem("Curso 1") + localStorage.getItem("Ano 1") ;
// }



// function AtualizaDados()
// {
//     localStorage.setItem(chave, document.getElementById("nome").value);
//     localStorage.setItem(chave2, document.getElementById("Curso").value);
//     localStorage.setItem(chave2, document.getElementById("Ano").value);
// }



// function LimparCampos()
// {
//     document.getElementById("Nome").value = "";
//     document.getElementById("Curso").value = "";
//     document.getElementById("Ano").value = "";
// }


// function insertData(){

//     i = i + 1;
//     localStorage.setItem("Nome " + i , document.getElementById("nome").value);
//     localStorage.setItem("Curso " + i , document.getElementById("curso").value);
//     localStorage.setItem("Ano " + i , document.getElementById("ano").value);
//     LimparCampos();
// }

// function ViewAllData()
// {
//     let resultado = "";

//     for(let indice = 1; indice <= i; indice++)
//     {
//         resultado += localStorage.getItem("Nome " + indice) + " - " + localStorage.getItem("Curso " + indice) + " - " + localStorage.getItem("Ano " + indice) + "<br>";
//     }

// document.getElementById("resultado").innerHTML = resultado;
// }

// function DeleteData(){

//     localStorage.removeItem("Nome " + document.getElementById ("indice").value);
//     localStorage.removeItem("Curso " + document.getElementById ("indice").value);
//     localStorage.removeItem("Ano " + document.getElementById ("indice").value);

//     document.getElementById("indice").value + "";
// }







