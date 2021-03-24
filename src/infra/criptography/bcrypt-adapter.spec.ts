import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

const DEFAULT_SALT_VAUE = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(DEFAULT_SALT_VAUE)
}

jest.mock('bcrypt', () => {
  return {
    async hash (): Promise<string> {
      return new Promise(resolve => resolve('hashed_value'))
    }
  }
})

describe('Encrypter Adapter', () => {
  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()

    const bcryptSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('value')

    expect(bcryptSpy).toHaveBeenCalledWith('value', DEFAULT_SALT_VAUE)
  })
})
