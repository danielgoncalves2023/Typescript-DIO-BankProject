export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name
    }

    // Depositar valor
    deposit = (value: number) => {
        if(this.validateStatus()){
            this.balance += (value)
        console.log(`Você depositou R$ ${value}`)
        } else {
            console.log(`Conta inválida.`)
        }
    }

    // Sacar valor
    withdraw = (value: number) => {
        if(this.validateStatus()){
            this.balance -= value
            console.log(`Você sacou R$ ${value}`)
        }
    }

    // Exibir saldo conta
    getBalance = (): void => {
        console.log(`Seu atual saldo é de R$ ${this.balance}`)
    }

    // Alterar status conta
    changeStatusAccount = (stat: boolean) => {
        this.status = stat
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } else {
            throw new Error('Conta inválida')
        }
    }
}