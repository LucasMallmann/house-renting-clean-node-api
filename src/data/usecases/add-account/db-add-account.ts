import {
  IAddAccountRepository,
  IEncrypter,
  IAddAccount,
  IAccountModel,
  IAddAccountParams
} from './db-add-account-protocols'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: IEncrypter
  private readonly addAccountRepository: IAddAccountRepository

  constructor (encrypter: IEncrypter, addAccountRepository: IAddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: IAddAccountParams): Promise<IAccountModel> {
    const { password } = accountData

    const hashedPassword = await this.encrypter.encrypt(password)

    await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword })
    )

    return new Promise(resolve => resolve(null))
  }
}