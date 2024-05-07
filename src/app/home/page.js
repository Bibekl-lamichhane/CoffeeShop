import Items from '@/component/Items/App'
import FollowUs from '@/component/followus/App'
import Footer from '@/component/footer/App'
import MainSection from '@/component/main/App'
import NavBar from '@/component/navbar/App'
import Section1 from '@/component/section1/page'
import Section2 from '@/component/section2/App'
import React from 'react'
const page = () => {
  return (
    <><NavBar/>
    <MainSection/>
    <Section1/>
    <Items/>
    <Section2/>
    <FollowUs/>
    <Footer/>
    </>
    
  )
}

export default page