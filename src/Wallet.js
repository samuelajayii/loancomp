import { faFilter } from "@fortawesome/free-solid-svg-icons"
import Card from "./Card"
import WalletButton from "./WalletButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDown } from "@fortawesome/free-solid-svg-icons"
import Table from "./Table"

const Wallet = () => {
    return(
        <div className="w-full h-full">
            <div className="flex flex-col md:flex-col lg:flex-row w-full items-center">
                <Card name="MAIN WALLET" value="$200,000"/>
                <Card name="LOAN WALLET" value="$200,000"/>
                <div className="flex flex-col w-full">
                    <WalletButton name="Fund Main Wallet"/>
                    <WalletButton name="Send from Main Wallet to Bank"/>
                    <WalletButton name="Swap from Wallet to Wallet"/>
                </div>
            </div>
            <div className="mt-4 font-semibold text-[#2d4094]">
                <h1 className="text-md mb-3">Transaction History</h1>
                <div className="flex items-center mb-4">
                    <button className="flex items-center border p-2 rounded-md hover:bg-[#475284] hover:text-white duration-300">
                        <h1 className="mr-3">Filter by:</h1>
                        <FontAwesomeIcon icon={faFilter}/>
                    </button>
                    <button className="flex items-center border p-2 rounded-md ml-5 hover:bg-[#475284] hover:text-white duration-300">
                        <h1 className="mr-3">Sort by:</h1>
                        <FontAwesomeIcon icon={faUpDown} />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden ">
                <Table/>
            </div>
        </div>
    )
}

export default Wallet