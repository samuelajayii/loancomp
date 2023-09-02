// import { useState } from "react"
const Location = (props) => {
    return(
        <div className="mx-10 my-2">
            <h1 className=" font-semibold text-2xl text-[#475284]">{props.name}</h1>
            <p className="font-semibold text-[#b9bbbc] mt-1" ><span>Home / </span><span className="text-[#475284]">{props.name}</span></p>
        </div>
    )
}
export default Location