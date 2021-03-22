import router from 'next/router'

type SubmitType = {
  name?: string
  phone?: string
  description?: string
  sourceUrl?: string
  type?: number
}
export const submitForm = async (params: SubmitType): Promise<any> => {
  params.sourceUrl = router.pathname
  params.type = 1
  const res = await fetch('/api/lj/crm/open/form/sync', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  })
  const result = res.json()
  return result
}

const URL = process.env.apiUrl
export const request = {
  post: async (API: string, params: any): Promise<any> => {
    const API_URL = `${URL}${API}`
    const res = await fetch(API_URL, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })
    const result = res.json()
    return result
  },
  get: async (API: string): Promise<any> => {
    const API_URL = `${URL}${API}`
    const res = await fetch(API_URL, {
      credentials: 'include',
      mode: 'cors'
    })
    const result = await res.json()
    console.log(API_URL)
    return result
  }
}
