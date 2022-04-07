import React from 'react'
import '../../styles/cardsView.css'
import SportCard from '../cards/sportCard'



function SportsView() {
  return (
    <main>
        <section style={{backgroundImage: "url(https://images.pexels.com/photos/10043107/pexels-photo-10043107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)", backgroundSize:'cover'}}>  
          <SportCard/>
        </section>
    </main>
  )
}

export default SportsView
