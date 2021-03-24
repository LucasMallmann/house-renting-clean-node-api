
import { IEncrypter, IAddAccount, IAccountModel, IAddAccountModel } from './db-add-account-protocols'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: IEncrypter

  constructor (encrypter: IEncrypter) {
    this.encrypter = encrypter
  }

  async add (data: IAddAccountModel): Promise<IAccountModel> {
    const { password } = data

    await this.encrypter.encrypt(password)

    return new Promise(resolve => resolve(null))
  }
}
