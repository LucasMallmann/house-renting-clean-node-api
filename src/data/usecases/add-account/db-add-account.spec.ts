import { IEncrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'

const HASHED_VALUE = 'hashed_value'

const makeEncrypter = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve(HASHED_VALUE))
    }
  }

  return new EncrypterStub()
}

interface SutTypes {
  sut: DbAddAccount
  encrypterStub: IEncrypter
}

const makeSut = (): SutTypes => {
  const encrypterStub = makeEncrypter()
  const sut = new DbAddAccount(encrypterStub)

  return {
    sut,
    encrypterStub
  }
}

describe('Db Add Account', () => {
  test('should call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()

    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@email.com',
      password: 'valid_password'
    }

    await sut.add(accountData)

    expect(encryptSpy).toHaveBeenLastCalledWith('valid_password')
  })
})
