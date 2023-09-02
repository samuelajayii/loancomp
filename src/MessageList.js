import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBox from './SearchBox'
import Messages from './Messages'
import atilola from './atilola.jpg'
import nifemi from './nifemi.jpg'
import kofo from './kofo.jpg'
import mp from './mp.jpg'

const MessageList = () => {
    return(
        <div className=''>
            <div className='flex items-center text-[#475284] font-semibold text-lg mb-8 ml-2'>
                <h1 className='mr-5 '>People</h1>
                <FontAwesomeIcon icon={faEye}/>
            </div>
            <SearchBox />
            <div className='h-56 overflow-y-scroll mt-3 md:w-[26rem] pr-2'>
                <Messages name='Kofoworola Olugbade' message='How are you doing??' hour={12} minute={49} image={kofo}/>
                <Messages name='Adeyinka Atilola' message='BTS is the best' hour={12} minute={49} image={atilola}/>
                <Messages name='Gbankai Nifemi' message='All I do is drop gba anime takes on twitter all day' hour={8} minute={19} image={nifemi}/>
                <Messages name='Mary Precious' message='Food is bae' hour={2} minute={48} image={mp}/>
            </div>
        </div>
    )
}


export default MessageList