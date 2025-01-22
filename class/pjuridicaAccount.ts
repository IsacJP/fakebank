import { account } from "./account";

export class pjuridicaAccount extends account{
    private cnpj: number;

    constructor(name: string, pf_id: number, balance: number, cnpj: number){
        super(name, pf_id, balance);
        this.cnpj = cnpj;
    }
    
    public getLoan(value: number): void{
        if (this.get_status()){
                this.deposit(value);
                console.log(`Emprestimo de ${value} foi feito com sucesso`);
        }
    }    
    public get_cnpj(): number{
        return this.cnpj;
    }

    public set_cnpj(cnpj: number): void{
        this.cnpj = cnpj;
    }


}