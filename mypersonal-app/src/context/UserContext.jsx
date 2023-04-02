import React from 'react';

export const Usercontext=React.createContext();
export const UsercontextProvider=({children})=>{
    return(
       < UsercontextProvider>
       {children}
       </UsercontextProvider>
    )
}
