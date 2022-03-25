import { validationService } from './validation'

describe('Validation email', () => {
  test('Ввод email metallstas@mail.ru, функция возвращает пустую строку', () => {
    expect(validationService.validateEmail('metallstas@mail.ru')).toBe('')
  })

  test('Ввод email metallstas@mail, функция возвращает ошибку "Почта должна содержать специальный символ @ и домен"', () => {
    expect(validationService.validateEmail('metallstas@mail')).toBe(
      'Почта должна содержать специальный символ @ и домен'
    )
  })

  test('Пароль не введен, функция возвращает ошибку "Введите пароль"', () => {
    expect(validationService.validatePassword('')).toBe('Введите пароль')
  })

  test('Введенный пароль Qq12311, функция возвращает ошибку "Пароль должен содержать не менее 8 символов и не более 30 символов"', () => {
    expect(validationService.validatePassword('Qq12311')).toBe(
      'Пароль должен содержать не менее 8 символов и не более 30 символов'
    )
  })

  test('Введенный пароль Qq12311123232323232323232323233, функция возвращает ошибку "Пароль должен содержать не менее 8 символов и не более 30 символов"', () => {
    expect(
      validationService.validatePassword('Qq12311123232323232323232323233')
    ).toBe('Пароль должен содержать не менее 8 символов и не более 30 символов')
  })

  test('Введенный пароль 1234567JhonСмит, функция возвращает ошибку "Пароль должен содержать не менее 8 символов и не более 30 символов"', () => {
    expect(
      validationService.validatePassword('1234567JhonСмит')
    ).toBe('Пароль должен состоять только из цифр и латинских букв')
  })
})
