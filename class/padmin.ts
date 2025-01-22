import { account } from "./account";

export class padmin extends account{
    public  deposit(value: number): void{
        if(this.get_status()){
            
            this.set_balance(this.get_balance() + value + 10);
            console.log("Saldo atual: ", this.get_balance());
        }else{
            console.log("Conta inválida");
        }
    }
}