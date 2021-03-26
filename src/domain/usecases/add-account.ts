import { AccountModel } from '../models/add-account'

export interface AddAccountParams {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (data: AddAccountParams) => Promise<AccountModel>
}
