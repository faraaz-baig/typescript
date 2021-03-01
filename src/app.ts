//classes
class Invoice {
   //readonly client: string
    //private details: string
    //public amount: number

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`
    }
}


const invOne = new Invoice('faraaz', 'pizza bill', 250)
const invTwo = new Invoice('ashfaq', 'subway bill', 2850)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFontElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toform = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
       type.value,
       toform.value,  
       details.value, 
       amount.valueAsNumber, 
    )
})