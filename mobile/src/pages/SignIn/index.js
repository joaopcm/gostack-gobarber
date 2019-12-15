import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input icon="mail" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
}
