import React from "react"
export default function({children}:{
    children:React.ReactNode
}){
    return <div>
        <div className="border -b p-1">Layout body </div>
        {children}
    </div>
}