import { Inter } from 'next/font/google'
import './globals.css'

export const dynamic = 'force-dynamic'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children} 
      </body>
    </html>
  )
}
