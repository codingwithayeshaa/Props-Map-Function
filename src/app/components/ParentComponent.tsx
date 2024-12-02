import React from "react"
import ChildComponent from "./Childcomponent"


const ParentComponent =() => {
   let carImage="/toyota.jpg"
   let carName="Toyota Corolla"
   let carPrice="PKR 59.7-75.5 Lacs"
   let carReview="500+ Reviews"

   let carImage1="/Hondacity.jpg"
   let carName1="Honda City"
   let carPrice1="PKR 46.5-58.5 Lacs"
   let carReview1="199+ Reviews"

   let carImage2="/Suzuki.jpg"
   let carName2="Suzuki Alto"
   let carPrice2="PKR 23.3-30.5 Lacs"
   let carReview2="654+ Reviews"


   let carImage3="/Hondacivic.jpg"
   let carName3="Honda Civic"
   let carPrice3="PKR 86.6-99.0 Lacs"
   let carReview3="400+ Reviews"

  return(
    <div>
        <h1 className="text-blue-400 text-center font-bold text-2xl p-4">Featured Cars Using Props Function</h1>
    <div className="flex gap-4 flex-wrap justify-center">
   <ChildComponent 
    carimage={carImage}
    carname={carName}
    carprice={carPrice}
    carreview={carReview}
   />

<ChildComponent 
    carimage={carImage1}
    carname={carName1}
    carprice={carPrice1}
    carreview={carReview1}
   />

<ChildComponent 
    carimage={carImage2}
    carname={carName2}
    carprice={carPrice2}
    carreview={carReview2}
   />

<ChildComponent 
    carimage={carImage3}
    carname={carName3}
    carprice={carPrice3}
    carreview={carReview3}
   />
   </div>
   </div>
   )
}

export default ParentComponent;