// import React, { useEffect } from "react";

import { useState } from "react";

const ToggleThemeButton = () => {
  const html = document.querySelector("html");
    const [buttonMode,setButtonMode] = useState<'Dark'|'Light'>('Dark')

    const handleToggleClick = ()=>{
        if(html?.classList.contains("dark")){
            html?.classList.remove("dark")
            setButtonMode('Light')
            // html?.classList.add("light")
        } else{
            html?.classList.add("dark")
            setButtonMode('Dark')

        }
    }

  return <button onClick={handleToggleClick} className="dark:bg-slate-900 dark:text-gray-200 rounded-xl w-fit px-4 py-2 bg-gray-200 text-gray-700" >{buttonMode}</button >;
};

export default ToggleThemeButton;
