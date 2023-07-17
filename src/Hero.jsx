import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
   <section className='hero'>
<div className='hero-center'>
    <div className='hero-title'>
        <h1>Contentful CMS</h1>
        <p>I'm baby coloring book gluten-free tattooed air plant slow-carb. Asymmetrical 90's af cloud bread praxis pabst. Banjo edison bulb 90's letterpress distillery. Fingerstache tattooed kitsch ugh vape.

Letterpress meh humblebrag cray, pour-over four dollar toast blackbird spyplane tbh heirloom beard chia 8-bit next level. Lyft jianbing live-edge aesthetic blog bespoke. Yes plz mukbang biodiesel pour-over, tbh yr vibecession craft beer thundercats cronut. Quinoa unicorn godard retro, microdosing big mood vinyl shabby chic skateboard chillwave man bun.</p>
    </div>
    <div className="img-container">
        <img src={heroImg} alt='woman and the browser' />
    </div>
</div>

   </section>
  )
}

export default Hero
