import './globals.css'
import type { Metadata } from 'next'
import { Lato} from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify';


const lato = Lato({
  weight: ['100','300','400', '700'],
  subsets: ['latin'],
  display: 'swap',
 })


export const metadata: Metadata = {
  title: 'DREAMRENT',
  description: 'The best place for rent , buy or sell your Land',
  keywords:'rent land property real estate agent broker sale purchase house apartment condo plot unit',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
      <AuthContextProvider>
        {children}
        <ToastContainer/>
        </AuthContextProvider>
        </body>
    </html>
  )
}
