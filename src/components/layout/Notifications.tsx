import { captureException } from '@sentry/browser';
import { errorEmitter, notificationEmitter } from '@src/services/events';
import { notification } from 'antd';
import { useEffect } from 'react';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

function Notifications() {
  const [notificationApi, contextHolder] = notification.useNotification({
    maxCount: 3,
  });

  function handleInfo(message: string) {
    showNotification('info', message);
  }

  function showNotification(type: NotificationType, message: string) {
    const args = {
      message: 'Arconnect',
      description: message,
      placement: 'bottomRight',
      duration: 30,
    } as any;
    console.log(args);
    notificationApi[type](args);
  }

  useEffect(() => {
    notificationEmitter.on('notification', handleInfo);

    errorEmitter.on('error', (error) => {
      captureException(error);
    });

    return () => {
      notificationEmitter.removeAllListeners();
      errorEmitter.removeAllListeners();
    };
  }, []);

  return contextHolder;
}

export default Notifications;
