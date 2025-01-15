import React from "react";
import vlogger  from "../assets/vlogger.gif";

function Logo ({width = "100px"}) {
    return (
        <div>
            <img src={vlogger} alt="vlog"
                className='rounded-xl h-8 w-8 md:h-12 md:w-12' />     
        </div>
    )
}

export default Logo