import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

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
