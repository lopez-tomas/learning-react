import Link from 'next/link'
import Image from 'next/image'
import Coffee from '../public/coffee.jpg'

//<Image src="/coffee.jpg" width={400} height={600} />
export default function Home() {
  return (
    <div>
      <Link href="/piggies/">Ir to Piggies</Link>
      <p>Happy piggy</p>
      <Image src={Coffee} width={400} height={600} />
    </div>
  )
}
