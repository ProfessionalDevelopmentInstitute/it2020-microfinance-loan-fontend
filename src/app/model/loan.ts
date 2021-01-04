import {Customer} from './customer';
import {Guarantor} from './guarantor';
import {LoanPaymentPolicy} from './loanPaymentPolicy';
import {StaffModel} from './StaffModel';

export interface Loan{
  customer: Customer;
  guarantor: Guarantor;
  id?: number;
   loanPaymentPolicy: LoanPaymentPolicy;
   loandedDate: string;
   staff: StaffModel;
}
