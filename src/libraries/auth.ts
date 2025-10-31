// // src/library/auth.ts
export async function login(email: string, password: string) {
  const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  return await res.json();
}