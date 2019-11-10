import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um endereço de e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Sua senha precisa ter no mínimo 6 caracteres'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Seu lindo nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail massa" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha totalmente complexa"
        />
        <button type="submit">Criar minha conta incrível</button>
        <Link to="/">Eu já tenho uma conta maneira</Link>
      </Form>
    </>
  );
}
