import React from "react";
import Navbar from '../src/components/navbar'
import Head from '../src/components/head'
import Card from '../src/components/card'
import Data from '../src/data'



export default function App(){
  const cards= Data.map((item) => {
    
    return <Card key = {item.id} 
                 {...item}
            />
  })

  return(
    <div className="container">
    <Navbar/>
    <Head/>
    <section className="cards-div">
      {cards}
    </section>
    </div>
  )
}