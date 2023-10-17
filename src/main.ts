let message: string

message = 'Hello Word'

message.toLowerCase()

console.log(message);

let total: number
total = 10

console.log(total);

let isOpen: boolean
isOpen = false
console.log(isOpen);

// any, void, never

let stock: any = 89

stock = null

function showInformation(name: string = 'João'): void {
    console.log('jaum');
}

function showInformation2(): never {
   throw new Error('error')
}
