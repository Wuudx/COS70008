import React from "react";
import { BiSad } from "react-icons/bi";

const NoContentFound = ({ message }) => {
    return (
        <div>
            <BiSad /> {message}
        </div>
    );
};
export default NoContentFound;
