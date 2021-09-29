import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
  IEncrypter,
  AddAccount,
  AccountModel,
  AddAccountParams
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: IEncrypter,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) { }

  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const existingAccount = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    if (existingAccount) {
      return null
    }
    const { password } = accountData
    const hashedPassword = await this.encrypter.encrypt(password)
    const account = await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword })
    )
    return account
  }
}
