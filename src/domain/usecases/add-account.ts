import { AccountModel } from '../models/add-account'

interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (data: AddAccountModel) => Promise<AccountModel>
}
