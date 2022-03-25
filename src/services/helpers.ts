export const tmsFetch = async (url: string, config?: RequestInit) => {
  const access = localStorage.getItem('access')
  const resp = await fetch(url, {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${access}`,
    },
    ...config?.headers,
  })
  console.log(resp)
  if (!resp.ok) {
    const err = await resp.json()

    const isExpaired = err.messages.some((el: { message: string }) =>
      el.message.includes('expaired')
    )

    if (isExpaired) {
      const refresh = localStorage.getItem('refresh')
      const respToken = await fetch(
        `https://studapi.teachmeskills.by/auth/jwt/refresh/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh: refresh }),
        }
      )

      if (respToken.ok) {
        const result = await respToken.json()
        console.log(result)

        localStorage.setItem('access', result.access)

        const refreshResponce = await fetch(url, {
          ...config,
          headers: {
            Authorization: `Bearer ${access}`,
          },
          ...config?.headers,
        })

        return refreshResponce
      }
    }
    console.log(isExpaired)
  }
  return resp
}
