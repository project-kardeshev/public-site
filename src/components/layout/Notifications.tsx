import { captureException } from '@sentry/browser';
import { errorEmitter, notificationEmitter } from '@src/services/events';
import { notification } from 'antd';
import { useEffect } from 'react';
import { GiCaduceus, GiDreadSkull } from 'react-icons/gi';

import ArConnectIcon from '../icons/ArConnect.svg';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

const arconnectArgs = {
  message: 'Arconnect',
  placement: 'bottomRight',
  duration: 5,
  icon: (
    <img
      src={ArConnectIcon}
      alt="ArConnect"
      // eslint-disable-next-line
      style={{ width: '40px', height: '40px' }}
    />
  ),
} as any;

const errorArgs = {
  message: 'Error',
  placement: 'bottomRight',
  duration: 5,
  icon: <GiDreadSkull size={20} color="#A40303" />,
} as any;

const infoArgs = {
  message: 'Info',
  placement: 'bottomRight',
  duration: 5,
  icon: <GiCaduceus size={20} color="#2b8423" />,
} as any;

function Notifications() {
  const [notificationApi, contextHolder] = notification.useNotification({
    maxCount: 3,
  });

  function handleArcConnect(message: string) {
    showNotification('arconnect', message, 'Arconnect');
  }

  function handleInfo(message: string) {
    showNotification('info', message, 'info');
  }

  function handleError(error: Error) {
    captureException(error);
    console.error(error);
    showNotification('error', error.message, error.name);
  }

  function showNotification(
    type: NotificationType | 'arconnect',
    message: string,
    title: string,
  ) {
    let args: any;
    let notificationType: NotificationType = 'info';
    switch (type) {
      case 'arconnect':
        args = { ...arconnectArgs, description: message, message: title };
        notificationType = 'info';
        break;
      case 'error':
        args = { ...errorArgs, description: message, message: title };
        break;
      case 'info':
        args = { ...infoArgs, description: message, message: title };
        break;
      default:
        args = { description: message, message: title };
        notificationType = 'error';
    }

    notificationApi[notificationType](args);
  }

  useEffect(() => {
    notificationEmitter.on('info', handleInfo);
    notificationEmitter.on('arconnect', handleArcConnect);
    errorEmitter.on('error', handleError);

    return () => {
      notificationEmitter.removeAllListeners();
      errorEmitter.removeAllListeners();
    };
  }, []);

  return contextHolder;
}

export default Notifications;
