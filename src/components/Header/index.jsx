import logo from '../../assets/logo.svg';
import { Logo } from '../Logo';

import { HeaderView } from "./styles";

export const Header = () => {
  return (
    <HeaderView>
      <Logo src={logo} />
    </HeaderView>
  );
};
