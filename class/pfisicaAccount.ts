import { account } from "./account";

export class pfisicaAccount extends account {
    private cpf: number;
    private age: number;
    constructor(name: string, pf_id: number, balance: number, cpf: number, age: number) {
        super(name, pf_id, balance);
        this.cpf = cpf;
        this.age = age;
    }

    public get_cpf(): number {
        return this.cpf;
    }

    public set_cpf(cpf: number): void {
        this.cpf = cpf;
    }

    public get_age(): number {
        return this.age;
    }

    public set_age(age: number): void {
        this.age = age;
    }

}
