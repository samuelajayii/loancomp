import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const TextBar = () => {
    const [formValue, setFormValue] = useState('')
    const sendMessage = async(e) => {
        e.preventDefault()
        setFormValue('')
        alert(`You said "${formValue}"`)
        
    }


    return(
        <div>
            <div className='py-2'>
                <div className='px-3 flex w-full'>
                    <form id='text' name='textbox' className='border-solid w-full border rounded-full overflow-hidden flex flex-row items-center px-2' onSubmit={sendMessage}>
                        <input type='text' placeholder='Type Message Here' className='border-none outline-none shadow-none p-4 rounded-s-md font-semibold w-full' value={formValue} onChange={(e) => setFormValue(e.target.value)}></input>
                        <button type='submit'><FontAwesomeIcon icon={faPaperPlane} className=' text-white bg-[#475284] px-7 py-3.5 mr-4 rounded cursor-pointer'/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TextBar