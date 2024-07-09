import React from "react"

const InputBox = (label : string, func:()=>void)  =>{
    return (
        <div>
            <label htmlFor={label}></label>
            <input type="text" placeholder={label} onChange={func} />
        </div>
    )
}
export default InputBox