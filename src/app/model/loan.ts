export class Loan{
  constructor(public customerId: number, public guarantorId: number, public id: number, public loanPaymentPolicyId: number,
              public loandedDate: string, public staffId: number) {
   }
}
