import React from 'react'
import I15pm from "../assets/iphone15promax.png";
import G24u from "../assets/galaxys24ultra.jpg"
import Op from "../assets/oneplus.png"
function Carousel() {
  return (
    <>
        
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner m-2  ">
    <div className="carousel-item active">
      <img src={G24u} className="w-100  "  style={{maxHeight : '675px', filter : 'brightness(40%)' }} alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={I15pm} className="w-100  "  style={{maxHeight : '675px', filter : 'brightness(40%)' }} alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={Op} className="w-100"  style={{maxHeight : '675px', filter : 'brightness(40%)' }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    
  )
}

export default Carousel