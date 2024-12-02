 import CarCard from "./CarCard";
 import Image from "next/image";

const ArrayMap = () => {
    const carDetails=[
            {carName:"Toyota Corolla",price:"PKR 59.7-75.5 Lacs",reviews:"500+ Reviews",imagePath:"/toyota.jpg"},
            {carName:"Honda City",price:"PKR 46.5-58.5 Lacs",reviews:"199+ Reviews",imagePath:"/Hondacity.jpg"},
            {carName:"Suzuki Alto",price:"PKR 23.3-30.5 Lacs",reviews:"654+ Reviews",imagePath:"/Suzuki.jpg"},
            {carName:"Honda Civic",price:"PKR 86.6-99.0nLacs",reviews:"400+ Reviews",imagePath:"/Hondacivic.jpg"},
        ]
        return(
            <div>
                <h1 className="text-blue-400 text-center pb-6 font-bold text-2xl">Featured Cars Using Map Function</h1>
                <div className="flex gap-4 flex-wrap justify-center">
                  {
                    carDetails.map((vehicle) => {
                        return(
                            <CarCard carName={vehicle.carName} carPrice={vehicle.price} carReview={vehicle.reviews}
                            imagePath={vehicle.imagePath} />
                        )
                    })
                  }
                </div>
            </div>
              
        )
}

export default ArrayMap;