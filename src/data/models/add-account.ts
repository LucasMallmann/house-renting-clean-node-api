import {
  AddAccount as IAddAccountDomain,
  AddAccountParams as IAddAccountParamsDomain
} from '../../domain/usecases/add-account'

import { AccountModel as AccountModelDomain } from '../../domain/models/add-account'

export type AddAccount = IAddAccountDomain

export type AddAccountParams = IAddAccountParamsDomain

export type AccountModel = AccountModelDomain
