import Image from "next/image";

const ChildComponent = (props:any) => {
    console.log(props)
    return(
          <div className="flex flex-col bg-black items-center border border-black mb-6 pb-2">
            <Image
               src={props.carimage}
               alt={props.carname}
               layout="intrinsic"
               width={250}
               height={200}
            />

            <h1 className="font-bold text-white">
                {props.carname}
            </h1>

            <h1 className="text-green-500 text-sm p-2">
                {props.carprice}
            </h1>

            <h1 className="text-yellow-300 text-xs pb-2">
                {props.carreview}
            </h1>
            </div>
    )
}

export default ChildComponent;