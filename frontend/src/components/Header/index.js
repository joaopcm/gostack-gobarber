import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Demo Provider</strong>
              <Link to="/profile">MY PROFILE</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt="Demo Provider"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
