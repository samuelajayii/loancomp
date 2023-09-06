
const Messages = (props) => {
    return(
        <div className=''>
            <div className="mb-5 flex items-center rounded-xl py-3 pl-5 bg-[#F4F6F7] pr-0 md:w-full">
                <img alt="pfp" src={props.image} className='w-11 rounded-full self-start'/>
                <div className='flex flex-col px-5'>
                    <h1 className='mb-2 font-bold text-lg text-[#475284]'>{props.name}</h1>
                    <p className='mb-2 text-[#858895] font-semibold'>{props.message}</p>
                    <p className='text-[#bbbdc3]'>{props.hour}:{props.minute}PM</p>
                </div>
            </div>
        </div>
    )
}

export default Messages