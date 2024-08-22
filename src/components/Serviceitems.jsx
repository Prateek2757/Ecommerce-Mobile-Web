import React, { useContext, useEffect, useState } from 'react'
import coffee from '../assets/lamp.jpg'
import blogContext from '../Context/blogs/BlogContext'
const Serviceitems = () => {
    const context = useContext(blogContext)
    const {article1,fetchData} = context
    // const articles = [
    //     {   
    //         "source": {
    //             "id": "345",
    //             "name": "Google News"
    //         },
    //         "author": "Deadline",
    //         "title": "Alain Delon Dies: Iconic French Actor Was 88 - Deadline",
    //         "description": null,
    //         "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1haUlrbnFhaGF2SmQ0cmYxQXRWZjlGZlZnWFB2TGdmc0N3TzZPVFRfNGhPZ1psWHNLZnREazBPNzRIeFl3R2NOcjBFMUV4aVJic1U2bTJfNUJIZG1VeUMtU09CaVh5c3BuX1ZuLTdlWlVVQzlzWlpGb1ZwbF9IZw?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2024-08-18T07:08:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "123",
    //             "name": "Google News"
    //         },
    //         "author": "Bleacher Report",
    //         "title": "Dricus Du Plessis Beat Israel Adesanya Physically and Mentally at UFC 305 - Bleacher Report",
    //         "description": null,
    //         "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOc2Rud1pGNmMtVVhMMUl0cHJfOWcwcVNpX0tjV0VkRGtvb1I1RTAzTzV1OXR1YXUzOXdhMGdkdUJ2ajdGWGRwZEVWMkdWYzlRNG9sVkRRR3VDdjdWUy13Y2tROUsxZE5ZRGtQZW54aGxFQW9LclZzLUdtTkdXT2lkRUg3c0I5cjVwaWZwb0JYUTFBNU9jaEcydXBQdzM1N0dSOTUxQUJ0WmFaVjlka1pTYnVhRkdHS1B1OEHSAc8BQVVfeXFMT3NYVW1OVFRNa2hXaTJlQVk4TGh4SV9UX1hVdnJ5aUZTRzBmclJKWms5SDBlbUxreHpHVHpIbThJN0U0ZEUtT21aSDdjTUFtNEMtZXJKaFNETTFKSkh3cUdrVWZRM1pLQ1dTVWpEblU3dDNpdDRaNjBlamhzTjR5MWY3aW5xc245SzBJUzFMX0xTa1NWUk05bXBIRjd3VGlXMlVzT3R1T3A5RGQzOGMySkR6cDc0Zkg0RHFiWGo1bWJJdURkTnU5RGswUlBmX1BJ?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2024-08-18T06:02:11Z",
    //         "content": null
    //     }

    // ]
    useEffect(()=>{
        fetchData()
    })
  
    return (
        <div className='container'>
            <h4 className='service-heading my-3'>Our Brands</h4>
            <div className='row'>
                {article1 && article1.slice(0,10).map((e) => {

                    return (  // You need to add a return statement here
                        <div className='col-md-3 mb-4'  >
                            <div className="card h-100 d-flex flex-column" >
                                <img src={e.urlToImage === null ? coffee : e.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body flex-grow-1 d-flex flex-column ">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.source.id}</p>
                                    <a href={e.url} target='blank' className="btn btn-primary mt-auto">Read More</a>
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