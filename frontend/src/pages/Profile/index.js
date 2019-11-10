import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Seu nome incrível" />
        <Input name="email" placeholder="Seu endereço de e-mail massa" />
        <hr />
        <Input name="oldPassword" placeholder="Sua senha atual" />
        <Input
          name="password"
          placeholder="Sua nova senha totalmente complexa"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirmação da sua nova senha"
        />

        <button type="submit">Atualizar meu super perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
