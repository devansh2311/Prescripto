import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '$'

    const value = {
        doctors,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}        
        </AppContext.Provider>
    )
}

export default AppContextProvider
// add context support in our frontend part i.e. main.jsx