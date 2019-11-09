import React, { useEffect, useMemo, useState } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdNotifications } from 'react-icons/md';

import colors from '~/styles/colors';
import {
  Badge,
  Container,
  EmptyContainer,
  Notification,
  NotificationList,
  Scroll,
} from './styles';

import api from '~/services/api';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const hasUnread = useMemo(() => {
    return !!notifications.find(notification => notification.read === false);
  }, [notifications]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToggleVisible}>
        <MdNotifications color={colors.primary} size={20} />
      </Badge>

      <NotificationList visible={visible}>
        {notifications.length > 0 ? (
          <Scroll>
            {notifications.map(notification => (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onCLick={() => handleMarkAsRead(notification._id)}
                  >
                    Mark as read
                  </button>
                )}
              </Notification>
            ))}
          </Scroll>
        ) : (
          <EmptyContainer>
            <strong>Looks like the box is empty</strong>
          </EmptyContainer>
        )}
      </NotificationList>
    </Container>
  );
}
