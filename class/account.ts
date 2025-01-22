export abstract class account{
    private readonly name: string;
    private readonly acount_id: number;
    private balance: number;
    private status: boolean = true;

    constructor(name: string, acount_id: number, balance: number){
        this.name = name;
        this.acount_id = acount_id;
        this.balance = balance;
    }

    public withdraw(value: number): void{
        if (this.status){
            if (this.balance >= value){
                this.balance -= value;
                console.log(`Saque de ${value} foi feito com sucesso`);
            }else{
                console.log("Saldo insuficiente");
            }
        }else{
            console.log("Conta inativa");
        }
    }
    public deposit(value: number): void{
        if (this.status){
            this.balance += value;
            console.log(`Deposito de ${value} foi feito com sucesso`);
        }
    }

    public get_name(): string{
        return this.name;
    }

    public get_pf_id(): number{
        return this.acount_id;
    }

    public get_balance(): number{
        return this.balance;
    }


    public set_balance(balance: number): void{
        this.balance = balance;
    }


    public get_status(): boolean{
        return this.status;
    }

    public set_status(status: boolean): void{
        this.status = status;
    }

}
