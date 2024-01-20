import React , {createContext , useContext} from "react";
import { useUser } from "./hooks/user";


export const store = createContext({ 
    user: '',
    token: '',
    setUserData: (user) => {}
});
const {Provider} = store
export function StateProvider({children}) {
   const user = useUser();

    return(
        <Provider
          value={{
            user,
         }}
        >{children}</Provider>
    )
};

export const useStore = () => useContext(store)