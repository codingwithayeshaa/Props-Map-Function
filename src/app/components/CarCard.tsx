const CarCard = (props:any) => {
   return(
    <div className="bg-black flex flex-col items-center border border-black mb-6 pb-2">
        <img src={props.imagePath}alt="Car Image" className="w-[250px]"/>
        <h3 className="text-white font-bold">{props.carName}</h3>
        <h3 className="text-green-500 p-2 text-sm">{props.carPrice}</h3>
        <p className="text-yellow-300 text-xs">{props.carReview}</p>
    </div>
   )
}
export default CarCard;