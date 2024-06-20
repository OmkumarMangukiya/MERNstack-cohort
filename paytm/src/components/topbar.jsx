import { Buttons } from "./Buttons";

const TopBar = () => {
    return (
        <div className="flex justify-between p-1 m-4  rounded-md shadow-md bg-blue-200 outline outline-1">
            <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="" />
            <div className="flex justify-normal gap-4 p-2">
                <Buttons title='Log In' />
                <Buttons title='Sign Up' />
            </div>
        </div>
    );
};

export default TopBar;