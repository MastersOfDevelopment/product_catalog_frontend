const BASE_URL = 'https://product-catalog-backend-q6uq.onrender.com'

async function request<T>(url: string, method = 'GET', data: any = null): Promise<T> {
  const options: RequestInit = { method }

  if (data) {
    options.body = JSON.stringify(data)
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }

  try {
    const response = await fetch(BASE_URL + url, options)
    return response.json()
  } catch (error) {
    throw new Error('Cannot fetch data')
  }
}

export const client = {
  get: <T>(url: string) => request<T>(url),
}
