export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  type: 'CASH' | 'INVESTMENT' | 'CHECKING';
  color: string;
  currentBalance: number;
}
