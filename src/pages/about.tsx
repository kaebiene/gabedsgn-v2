import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hey, I'm Gabe!</h1>
        <p>
I'm a training UI/UX Designer with experience in Graphic Design.<br></br><br></br>
‍I love trying new mediums and styles, be it with illustration, web design, coding - whenever possible, I implement my ideas into reality using P5.js.<br></br><br></br>
I've completed a foundation at Ravensbourne and am now studying at UAL's <a href="https://www.arts.ac.uk/colleges/london-college-of-communication">London College of Communication.</a><br></br><br></br>
I'm currently a Junior Design Intern at <a href="https://contentsquare.com">Contentsquare!</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
