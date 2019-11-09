import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    // ...
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="full name" />
        <Input name="email" placeholder="Email address" />
        <hr />
        <Input name="oldPassword" placeholder="Current password" />
        <Input name="password" placeholder="New password" />
        <Input name="confirmPassword" placeholder="Confirm new password" />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Exit GoBarber</button>
    </Container>
  );
}
