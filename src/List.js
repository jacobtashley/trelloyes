import React from 'react'
import Card from './Card'

function List(props) {
    console.log(props)
    conconst arrayOfLis = apiResponse.items.map((item) =>
    <li key={item.id}>
      {item.name}
    </li>
  )
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                <Card 
                    title={props.title}
                    content={props.content}
                />
            </div>
        </section>
    )
}

export default List;