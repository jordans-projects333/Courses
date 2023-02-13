import Main from "./Main"
import Overview from "./Overview"
import Course1 from "./Course1"
import dynamic from 'next/dynamic'
const Course2 = dynamic(() => import('./Course2'))

export default function Home() {
  return (
    <Main>
      <Overview/>
      <Course1/>
      <Course2/>
    </Main>
  )
}
