import React from 'react'
import pizzaData from './data'
import './pizza.css'

function Pizza() {

    return (
        <>

            <div className='wrapper'>
                <h1>Fast Pizza.Com</h1>
            </div>

            <div className="box">
                {pizzaData.map((element, index) => {
                    return (<div key={index} className='boxes' id={(element.soldOut === false) ? ("") : "fade"}>
                        <div className="pic">
                            <img src={element.photoName} alt="piz" />
                        </div>
                        <div className="Top">
                            <h4>{element.name}</h4>
                            <p>{element.ingredients}</p>
                            <p> {(element.soldOut === false) ? ("Price $." + element.price) : "SoldOut"}</p>
                            
                        </div>
                    </div>
                    )
                })}
            </div>



        </>
    )
}

export default Pizza