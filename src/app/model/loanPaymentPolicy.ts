export class LoanPaymentPolicy{
  constructor(public id: number , public loanAmount: number, public loanInterest: number, public monthlyPayment: number,
              public months: number) {
  }
}
