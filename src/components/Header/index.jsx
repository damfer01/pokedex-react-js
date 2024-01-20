import logo from '../../assets/logo.svg'
import { Logo } from "../logo"

import { HeaderView } from "./style"

export  const Header = () =>{
    return (
         <HeaderView>
            <Logo src={logo}/>
         </HeaderView>
    )
}