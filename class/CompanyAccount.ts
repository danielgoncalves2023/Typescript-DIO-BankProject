import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    private currentLoan: number = 0;

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number) => {
        this.currentLoan += value
        console.log(`Empréstimo realizado com sucesso no valor de R$ ${value}`)
        this.deposit(value)
    }
}