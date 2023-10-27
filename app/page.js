import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hello, It's Next</p>
      <Link href="/news">Go to News</Link>
    </div>
  )
}
