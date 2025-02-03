import React, { Children } from "react";

function Button ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
       <button className={`px-4 py-2 rounded-lg font-merriWeather bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
       </button>
    )
}

export default Button