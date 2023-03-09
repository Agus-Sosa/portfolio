import { createContext,  } from "react";
    
export  const PortContext = createContext()

const PortContextProvider = ({children}) => {
    return (
        <>
        <PortContext.Provider>
            {children}  
        </PortContext.Provider>
        </>
    )
}

export default PortContextProvider;








