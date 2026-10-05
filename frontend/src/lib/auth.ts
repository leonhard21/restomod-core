const TOKEN_KEY = 'restomod_token'
const EMAIL_KEY = 'restomod_email'

export function setSession(token: string, email: string) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(EMAIL_KEY, email)
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

export function getUserEmail(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(EMAIL_KEY)
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(EMAIL_KEY)
}

export function isLoggedIn(): boolean {
  return getToken() !== null
}
