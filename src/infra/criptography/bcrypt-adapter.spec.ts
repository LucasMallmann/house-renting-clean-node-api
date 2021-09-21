import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

const DEFAULT_SALT_VAUE = 12
const DEFAULT_HASH_VALUE = 'hashed_value'

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(DEFAULT_SALT_VAUE)
}

jest.mock('bcrypt', () => {
  return {
    async hash (): Promise<string> {
      return new Promise(resolve => resolve(DEFAULT_HASH_VALUE))
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

  test('should throw an exception if Bcrypt throws', async () => {
    const sut = makeSut()

    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error() })

    const promiseHash = sut.encrypt('value')

    await expect(promiseHash).rejects.toThrow()
  })

  test('should return a hashed value on success', async () => {
    const sut = makeSut()

    const hashedValue = await sut.encrypt('value')

    expect(hashedValue).toBe(DEFAULT_HASH_VALUE)
  })
})
