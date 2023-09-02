import { faGear } from '@fortawesome/free-solid-svg-icons'
import kofo from './kofo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChatBoxHeader = () => {
    return(
       <div className='flex px-5 py-2 items-center bg-[#f3f6f8] w-full justify-between'>
            <div className='flex items-center'>
                <img src={kofo} alt="pfp" className='rounded-full w-9 mr-4'/>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-lg text-[#475284]'>Kofoworola Olugbade</h1>
                    <p className='text-[#a5a7ad] font-semibold text-sm'>kofoolugbade@gmail.com</p>
                </div>
            </div>
            
            <FontAwesomeIcon icon={faGear} className='cursor-pointer text-2xl'/>
       </div> 
    )
}

export default ChatBoxHeader