import React, { useContext, useEffect, useState } from 'react'
import "./ServiceItems.css"
import blogContext from '../Context/blogs/BlogContext'
const Serviceitems = () => {
    const context = useContext(blogContext)
    const {state:{cart,products},dispatch} = context
   
  
    return (
        <div className='container'>
            <h4 className='service-heading my-3 '>Our Brands</h4>
            <div className='row'>
                {products && products.slice(0,10).map((e) => {

                    return (  // You need to add a return statement here
                        <div className='col-md-3 mb-4 ' key={e.id}>
                            <div className="card bg-success h-100  "  >
                                <img src={e.img} className="card-img-top h-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-light">{e.title}</h5>
                                    <p className="card-text text-light">Rs. {e.price}</p>
                                    {cart && cart.some(p=>p.id===e.id)?( 
                                        <button 
                                    className='btn btn-danger'onClick={()=>{
                                        dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload: e
                                        })
                                    }}
                                    >Remove from cart</button>):
                                    (<button className='btn btn-primary' onClick={()=>{
                                        dispatch({
                                            type:"ADD_TO_CART",
                                            payload: e
                                        })  
                                    }}>Add to cart</button>)}
                                    
                                   
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Serviceitems