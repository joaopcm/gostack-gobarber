import React from 'react';
import { MdNotifications } from 'react-icons/md';
import colors from '~/styles/colors';
import {
  Badge,
  Container,
  Notification,
  NotificationList,
  Scroll,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color={colors.primary} size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quo facere temporibus ratione reiciendis at facilis
              qui reprehenderit impedit magni velit eaque in modi assumenda,
              ipsa nisi obcaecati incidunt neque!
            </p>
            <time>Há 2 dias atrás</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quo facere temporibus ratione reiciendis at facilis
              qui reprehenderit impedit magni velit eaque in modi assumenda,
              ipsa nisi obcaecati incidunt neque!
            </p>
            <time>Há 2 dias atrás</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quo facere temporibus ratione reiciendis at facilis
              qui reprehenderit impedit magni velit eaque in modi assumenda,
              ipsa nisi obcaecati incidunt neque!
            </p>
            <time>Há 2 dias atrás</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
