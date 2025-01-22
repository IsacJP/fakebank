import { pfisicaAccount } from "./class/pfisicaAccount";

import { pjuridicaAccount } from "./class/pjuridicaAccount";

import { padmin } from "./class/padmin";

console.log("Desafio 1:")

let user: pfisicaAccount = new pfisicaAccount ("Isac", 1, 100, 12345678900, 24);

console.log(user);
console.log("\n")

user.deposit(200);

console.log("Saldo atual:", user.get_balance());

console.log("\n Realizando saque: \n")
console.log(user.withdraw(50));

let company: pjuridicaAccount = new pjuridicaAccount("Lianet", 2, 600, 29876543211);

console.log(company);

console.log("\n Desafio 2: Realizando empréstimo de 200");

company.getLoan(200);

console.log(company.get_balance());

console.log("\n Desafio 3: Novo tipo de usuário com um deposit que adiciona +10 do que o valor solicitado.")
let userAdmin: padmin = new padmin ("Laura", 3, 1000);
console.log("Chamando com um laço for")
for(let i = 0; i<5 ; i++){
    userAdmin.deposit(100);
}

userAdmin.get_balance();