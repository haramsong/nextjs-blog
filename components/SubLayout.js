import Link from 'next/link';


export default function SubLayout({ children }) {
  return (
    <div>
      {children}
      <h1><Link href="/">홈으로</Link></h1>
    </div>
  )
}