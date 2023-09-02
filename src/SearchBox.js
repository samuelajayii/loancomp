import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBox = () => {
    return(
        <div>
            <div className=" flex justify-between items-center">
                <form className="border-solid border-white border rounded flex flex-row items-center h-10">
                    <input type='text' placeholder="Search" className="border-none outline-none shadow-none bg-[#F4F6F7] h-10 p-4 rounded-s-md font-semibold"/>
                    <FontAwesomeIcon icon={faSearch} className='bg-[#475284] p-3 rounded-r-md cursor-pointer text-white'/> 
                </form>
            </div>
        </div>
    )
}
export default SearchBox