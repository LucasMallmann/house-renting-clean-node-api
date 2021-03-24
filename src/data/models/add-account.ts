import {
  IAddAccount as IAddAccountDomain,
  IAddAccountParams as IAddAccountParamsDomain
} from '../../domain/usecases/add-account'

import { IAccountModel as IAccountModelDomain } from '../../domain/models/add-account'

export type IAddAccount = IAddAccountDomain

export type IAddAccountParams = IAddAccountParamsDomain

export type IAccountModel = IAccountModelDomain
