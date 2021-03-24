import { IAccountModel } from '../models/add-account'

export interface IAddAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (data: IAddAccountModel) => Promise<IAccountModel>
}
