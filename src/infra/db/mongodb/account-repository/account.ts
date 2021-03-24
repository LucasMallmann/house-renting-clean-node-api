import { IAddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { IAccountModel } from '../../../../domain/models/add-account'
import { IAddAccountParams } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements IAddAccountRepository {
  async add (account: IAddAccountParams): Promise<IAccountModel> {
    const accountsCollection = await MongoHelper.getCollection('accounts')
    const data = await accountsCollection.insertOne(account)
    const createdAccount = data.ops[0]

    return MongoHelper.mapId(createdAccount)
  }
}
