import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import prisma from './db'

export default async function Home() {
  // await prisma.todo.create({data:{title: 'test data'}}); 컴포넌트 매 렌더링시 실행
  const todos = await prisma.todo.findMany(); // database에서 불러옴
  console.log('todos', todos);
  return (
    <>
      <h1>It's Next.js</h1>
      <Link href="/news">Go to News</Link>
      {todos.map((todo)=> (
        <h1>{todo.title}</h1>
      ))}
    </>
  )
}
