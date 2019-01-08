export class Order{

    constructor(
        public paymentOption: string,  
        public address: string, 
        public number: number,
        public optionalAdderss: string,
        public orderItems:OrderItem[]=[]
    ){}
}

export class OrderItem{
    constructor(public quantity:number, 
        public menuId: string){}

    
}