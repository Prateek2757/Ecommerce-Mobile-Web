import React, { useContext, useEffect } from 'react'
import blogContext from '../Context/blogs/BlogContext'

function About() {
    const context = useContext(blogContext)
    const {state,updateValue,article1} = context;
    
    useEffect(()=>{
       updateValue()
    },[])
  return (
    <div>
        <h2>Hello this is {state.name} and I am {state.age}
            NewsPaper {article1[0].title}
        </h2>
    </div>
  )
}

export default About