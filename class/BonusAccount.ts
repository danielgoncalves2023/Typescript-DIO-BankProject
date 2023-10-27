import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
    private readonly promo: number = 1.1

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositBonus = (value: number) => {
        this.deposit((value*1.1))
    }
}