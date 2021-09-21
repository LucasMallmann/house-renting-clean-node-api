import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/add-account'
import { AddAccountParams } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountParams): Promise<AccountModel> {
    const accountsCollection = await MongoHelper.getCollection('accounts')
    const data = await accountsCollection.insertOne(account)
    const { insertedId } = data

    return {
      ...account,
      id: insertedId.toString()
    }
  }
}
