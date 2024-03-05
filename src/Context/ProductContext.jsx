import { useContext } from "react";
import { createContext } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) = {
    return( <AppContext.Provider value={children}>
    {children}
    </AppContext.Provider>)
};



//custom hoook
const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider ,useProductContext};