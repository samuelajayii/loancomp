


const Card = (props) => {
    return(
        <div className="lg:pr-6 rounded-xl w-full cursor-pointer hover:scale-105 transition-all duration-[400ms]">
            <div className="bg-[url('card-bg.jpg')] bg-center bg-cover card h-36 rounded-2xl mb-1 lg:mb-0 overflow-hidden">
                <div className="w-full h-full overflow-hidden backdrop-blur text-white text-[10px] font-semibold px-3">
                    <div className="w-full h-full flex flex-col justify-center items-end">
                        <h1 className="px-2.5 py-1 rounded-md backdrop-blur-sm bg-[#ffffff27] mb-2.5">{props.name}</h1>
                        <h1 className="text-2xl px-2.5 py-2 rounded-xl backdrop-blur-sm bg-[#ffffff27]">{props.value}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card