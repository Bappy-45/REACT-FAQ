import React, { useState } from 'react'

import style from './About.module.css'

import Faq from './Faq'
import data from './data.json'
function About() {
  const[faq ,setFaq]=useState(data)
  return (
    <div>
      <main className={style.container}>
        <section className={style.faq}>
          <h1 className={style.h1}> FAQ </h1>
          {
            faq.map((x)=> <Faq key={x.id} faqs={x}/>)
          }
        </section>
      </main>
    </div>
  )
}

export default About
