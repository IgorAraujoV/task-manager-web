export function isAuthenticated() {
  const isLogged = localStorage.getItem('@manager/auth');

  if (isLogged) return true;

  return false;
}
