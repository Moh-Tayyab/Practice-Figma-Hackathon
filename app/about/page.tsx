
import FullServices from '../component/FullServices'
import Services from '../component/Services'
import SmallCard from '../component/SmallCard'
import Story from '../component/Story'

const page = () => {
  return (
    <main>
        <Story />
        <SmallCard />
        <FullServices />
        <Services />
    </main>
  )
}

export default page
