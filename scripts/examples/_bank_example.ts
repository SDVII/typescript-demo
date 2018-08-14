type account = {
    money:number,
    deposit: (value:number) => void,
}

type self ={
    name : string,
    bankAccount : account,
    hobbies : string[],
}

let bankAccount: account = {
    money: 2000,
    deposit: function (value: number): void{
        this.money += value;
    }
}

let myself: self = {
    name: 'houmam',
    bankAccount: bankAccount,
    hobbies: ['reading','drawing']
}

myself.bankAccount.deposit(3000);
console.log(myself);