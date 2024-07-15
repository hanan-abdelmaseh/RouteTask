

export interface ITransaction {
  id: number
  customer_id: number
  date: string
  amount: number
}
export type ITransactionResponse = ITransaction[]

