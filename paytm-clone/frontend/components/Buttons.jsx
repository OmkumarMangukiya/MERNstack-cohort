/* eslint-disable react/prop-types */
export const Buttons = ({title}) => {
    return(
        <div className="bg-blue-400 rounded hover:bg-blue-800 hover:cursor-pointer hover:text-white text-lg h-9 w-18 text-center outline outline-offset-0 outline-1 whitespace-nowrap p-1">
            <button>{title}</button>
        </div>
    )
}