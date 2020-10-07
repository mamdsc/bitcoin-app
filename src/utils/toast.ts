import { notification } from 'antd';

const toast = (
  type: 'success' | 'error',
  message: string,
  description: string,
) => {
  notification[type]({
    message,
    description,
  });
};

export default toast;
