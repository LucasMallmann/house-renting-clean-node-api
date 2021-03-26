import {
  AddAccountRepository,
  IEncrypter,
  AddAccount,
  AccountModel,
  AddAccountParams
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: IEncrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: IEncrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const { password } = accountData

    const hashedPassword = await this.encrypter.encrypt(password)

    const account = await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword })
    )

    return account
  }
}
