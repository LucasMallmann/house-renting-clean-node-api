import { AddAccountParams, AccountModel } from '../models/add-account'

export interface AddAccountRepository {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
