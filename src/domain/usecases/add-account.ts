import { IAccountModel } from '../models/add-account'

interface IAddAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (data: IAddAccountModel) => Promise<IAccountModel>
}
