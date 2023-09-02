import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Table = () => {
    return(
        <div className="md:h-[7.3rem] md:overflow-y-scroll">
            <div className="h-fit">
            <table className="w-full h-fit text-left">
                <tr className="text-[#2d4094] bg-[#e9e9ec] rounded-lg overflow-hidden">
                    <th className="p-2">S/N</th>
                    <th>Date</th> 
                    <th>Amount</th>
                    <th>Payment Method</th> 
                    <th>Action</th>
                </tr>
                <tr className="text-[#ababab] border-b border-[#ababab]">
                    <td className="py-3">1</td>
                    <td>Sept 12, 2023</td>
                    <td>$4,000</td>
                    <td>Card</td>
                    <td className="cursor-pointer"><FontAwesomeIcon icon={faInfoCircle} className="text-[#2d4094] text-xl mr-2"/>Info</td>
                </tr>
                <tr className="text-[#ababab] border-b border-[#ababab]">
                    <td className="py-3">2</td>
                    <td>Oct 12, 2023</td>
                    <td>$4,000</td>
                    <td>Card</td>
                    <td className="cursor-pointer"><FontAwesomeIcon icon={faInfoCircle} className="text-[#2d4094] text-xl mr-2"/>Info</td>
                </tr>
                <tr className="text-[#ababab] border-b border-[#ababab]">
                    <td className="py-3">3</td>
                    <td>Nov 12, 2023</td>
                    <td>$4,000</td>
                    <td>Transfer</td>
                    <td className="cursor-pointer"><FontAwesomeIcon icon={faInfoCircle} className="text-[#2d4094] text-xl mr-2"/>Info</td>
                </tr>
                
                
                </table>
            </div>
        </div>
        
    )
}
export default Table