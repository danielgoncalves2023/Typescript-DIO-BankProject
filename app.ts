import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { BonusAccount } from "./class/BonusAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(390, 'Daniel', 29)
console.log(peopleAccount)
peopleAccount.getName()
peopleAccount.deposit(500)
peopleAccount.withdraw(300)
peopleAccount.getBalance()
peopleAccount.changeStatusAccount(false)
console.log(peopleAccount)

const newCompany: CompanyAccount = new CompanyAccount('DioCompany', 120)
newCompany.getLoan(1200)
console.log(newCompany)

const newBonusAccount: BonusAccount = new BonusAccount('Joao', 640)
newBonusAccount.depositBonus(1000)
console.log(newBonusAccount)