let users = ["Pedro","Ana","Joana", "Diego","Davi Messias","Cristiano"];

let searchUsers = prompt("Digite o nome do usuário que deseja buscar:");


//Lembrando que o usuário adm não pode mandar em branco a busca, chamamos isso de tentativa de erros.


//se o valo digitado na variavel seja igual a ada ele retornara com uma mensagem no console
if(searchUsers === ""){
    console.log("Não pode enviar em branco");

}

else{
    //retorna o usuario que foi encontrado
    let user = users.find(user =>
        user.toLowerCase().includes(searchUsers.toLowerCase().trim())

    );
//  console.log(typeof(user));
    //devemos tratar também caso a busca não retorne nenhum resultado

    //caso o valor digitado não exista ele sera colocado  no array adicionado no final

       if(user === undefined){
        //usuario não encontrado
        console.log("User not found");
        users.push(searchUsers)
        console.log(users)
       }


    
    // if(user.length === 0){
    //     //usuario não encontrado
    //     console.log("User not found");


    // }
    else{
    console.log("Usuário encontrado: ".concat(user));

    //buscar indice e usuario
    let index = users.indexOf(user);
    console.log(index)

    //excluir elemento
    // users.splice(index,1);
    // console.log(users)
  
    // alterar o elemento
    console.log(user)
   users.forEach(Element =>{
    console.log(Element);
});

//Atualizar valor
// users[index] = "Novo valor";
// console.log(users)



    }
}