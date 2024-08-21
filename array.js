const usuarios = [{nome: "Jorge", idade: 22, email: "jorge@gmail.com"}
, {nome: "Alex", idade: 19, email: "aquele_do_durex@gmail.com"},
{nome: "Roberta", idade: 56, email: "roberta@gamil.com"}
];


function adicionarUsuario(nome, idade, email) {
    
    if (!nome || !idade || !email) {
        console.error("Todos os campos devem ser preenchidos.");
        return;
    }

    
    if (idade <= 0 || isNaN(idade)) {
        console.error("A idade deve ser um número maior que 0.");
        return;
    }

    
    const usuario = { nome, idade, email };
    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso.");
}


function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    console.log("Lista de usuários:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}


adicionarUsuario("Mauro", 23, "mauro@gmail.com");

 

listarUsuarios(); 

