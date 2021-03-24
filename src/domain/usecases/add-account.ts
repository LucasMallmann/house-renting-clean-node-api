import { IAccountModel } from '../models/add-account'

export interface IAddAccountParams {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (data: IAddAccountParams) => Promise<IAccountModel>
}
