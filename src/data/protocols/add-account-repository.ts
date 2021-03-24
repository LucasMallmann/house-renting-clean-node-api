import { IAddAccountParams, IAccountModel } from '../models/add-account'

export interface IAddAccountRepository {
  add: (account: IAddAccountParams) => Promise<IAccountModel>
}
