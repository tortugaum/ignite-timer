import { HeaderContainer } from './style';

import logoIgnite from '../../assets/logo-ignite.svg';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt='Dois triângulos para cima' />
      <nav>
        <NavLink to='/' title='timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='history'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
