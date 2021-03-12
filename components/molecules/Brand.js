
import Link from 'next/link'
import Image from '../atoms/Image'

export default function Brand({ src = "", alt = "", href = "/" }) {
  return (
    <div>
      <Link href={href}>
        <a><Image src={src} alt={alt} /></a>
      </Link>
    </div>
  )
}
