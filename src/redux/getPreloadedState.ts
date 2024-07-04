import { getCookie } from 'cookies-next';

export const getPreloadedState = () => {
  const token = getCookie('african_token');
  const defalutValue = {
    auth: {
      access_token: (token ? token : null) as string | null,
    },
  };
  return defalutValue;
};
