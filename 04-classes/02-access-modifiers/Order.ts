class Order {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    get firstName(): string  {
        return this._firstName;
    }

    
    set firstName(value : string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value : string) {
        this._lastName = value;
    }
    
}

let myOrder = new Order("batuhan","aslan");

console.log(myOrder.firstName);
console.log(myOrder.lastName);