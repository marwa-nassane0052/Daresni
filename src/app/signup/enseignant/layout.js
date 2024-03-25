import './globals.css'


export const metadata = {
  title: 'Sign up',
  description: 'sign up like tutor in daresni platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}