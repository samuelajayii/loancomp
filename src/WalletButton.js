const WalletButton = (props) => {
    return (
        <div className="w-full">
            <button className="py-1 px-5 hover:scale-105 transition-all font-semibold text-[#475284] border border-[#cbccd1] hover:bg-[#475284] hover:text-white duration-300 rounded-md mt-1.5 w-full">{props.name}</button>
        </div>
    )
}
export default WalletButton