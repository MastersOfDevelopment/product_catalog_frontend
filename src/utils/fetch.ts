const BASE_URL = 'https://product-catalog-backend-q6uq.onrender.com'

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

async function request<T>(url: string, method: RequestMethod = 'GET', data: any = null): Promise<T> {
  const options: RequestInit = { method }

  if (data) {
    options.body = JSON.stringify(data)
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }

  const response = await fetch(BASE_URL + url, options)

  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
}
