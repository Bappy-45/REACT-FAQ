import React, { useState } from 'react'

import style from './Faq.module.css'
function Card(props) {
  const{ title,des}=props.faqs
  const[data,setData]=useState( true)
  return (
    <div>
      <article className={style.faq}>
       <div>
       <h3>{title}</h3> 
       <button onClick={(x)=>{setData(!data)}}> { data ?"+":"-"}</button>
       </div>
        {
          data && <p>{des}</p>
        }
      </article>
    </div>
  )
}

export default Card
