import { tmsFetch } from './helpers'

export const loginUser = async (email: string, password: string) => {
  const resp = await fetch(
    'https://studapi.teachmeskills.by/auth/jwt/create/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  )

  const result = await resp.json()
  if (!resp.ok) {
    throw result
  }

  return result
}

export const getProfile = async () => {
  const resp = await tmsFetch('https://studapi.teachmeskills.by/auth/users/me/')
  if (resp.ok) {
    const result = await resp.json()
    return result
  }
}
