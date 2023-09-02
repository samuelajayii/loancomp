import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function TopNav(){
    return(
        <div className='md:py-3 mt-5 md:mt-0 md:w-full lg:w-full font-semibold text-[#475284]'>
            <div className='bg-white p-3 w-screen md:w-full h-fit flex items-center justify-between flex-col md:flex-row md:rounded-lg'>
                <div className='p-3'>
                    <SearchBox />
                </div>
                <div className='flex items-center justify-center md:text-xl'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faMessage} className='bg-[#F4F6F7] p-2 rounded cursor-pointer mr-4'/> 
                    </Link>
                    <FontAwesomeIcon icon={faBell} className='bg-[#F4F6F7] p-2 mr-4 cursor-pointer rounded'/> 
                    <div className='flex items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faUser} className='bg-[#F4F6F7] p-2 rounded'/> 
                        <h3 className='ml-2'>Ajayi Samuel</h3>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default TopNav