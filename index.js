import User from "./Cap3/User.js"
import Docente from "./Cap3/Docente.js"
import Admin from "./Cap3/Admin.js"

const novoUser = new User("Jon", "j@j.com", "2000-01-01")
console.log(novoUser.exibirInfos());

//Tentativas de mudança, nenhuma delas muda
// novoUser.#nome = "Leoldo"
novoUser.nome = "Leoldo"

console.log(novoUser.exibirInfos());


//_________________________Exemplos de set e get_________________________
/*
class User {
    role = '';
    
    constructor(nome) {
        this.nome = nome;
        console.log(`Criado novo usuário: ${nome}` );
    }
}

// criar o usuário
let novoUser = new User('Rodrigo');

// modificar o role
novoUser.role = 'admin';
console.log(novoUser.role) // admin

----------------------------
class User {
 _role = '';

 set role(tipoRole) {
   if (tipoRole !== 'admin') {
     tipoRole = 'estudante'
   }
   this._role = tipoRole
 }

 get role() {
   return this._role
 }

 constructor(nome) {
   this._nome = nome;
 }
}
----------------------------
class User {
 _role = '';

 set role(tipoRole) {
   if (tipoRole !== 'admin') {
     tipoRole = 'estudante'
   }
   this._role = tipoRole
 }

 get role() {
   return this._role
 }

 constructor(nome) {
   this._nome = nome;
 }
}

// criar o usuário  
let novoUser = new User('Rodrigo');

// modificar o role
novoUser.role = 'admin'; // acessando via setter
console.log(novoUser.role) // admin

// tentar incluir um role não existente
novoUser.role = 'gerente';
console.log(novoUser.role) // estudante

-------------APENAS LEITURA---------------
class User {
  constructor(nome) {
   this._nome = nome
 }

 get nome(){
   return this._nome
 }
}

// criar o usuário
let novoUser = new User('Rodrigo');
console.log(novoUser.nome) //usando o getter

novoUser.nome = 'Mariana'
console.log(novoUser.nome) //não é modificado, continua 'Rodrigo'

//O setter não foi implementado, então a propriedade não é modificada.
----------------------------
//Usando  métodos como SET e GET
class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}

const novoUser = new User()
novoUser.setNome('Rodrigo');
console.log(novoUser.getNome()); //Rodrigo

*/