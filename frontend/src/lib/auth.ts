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

type Router = { push: (path: string) => void }

// Bloqueia a ação antes de chamar a API se não houver sessão ativa.
// Retorna true se pode prosseguir, false se já redirecionou pro login.
export function requireAuth(router: Router): boolean {
  if (isLoggedIn()) return true
  alert('Você precisa entrar para criar, editar ou remover registros.')
  router.push('/login')
  return false
}

// Trata 401 vindo da API (ex.: token expirou no meio da sessão).
// Retorna true se o erro era de autenticação e já redirecionou.
export function handleAuthError(error: any, router: Router): boolean {
  if (error?.response?.status === 401) {
    alert('Sua sessão expirou. Entre novamente.')
    router.push('/login')
    return true
  }
  return false
}
