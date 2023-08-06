import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Next App TODO',
  description: 'TODO App builded with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-main-dominant'>{children}</body>
    </html>
  )
}
