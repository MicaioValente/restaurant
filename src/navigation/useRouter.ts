import { useContext, useEffect, useState } from 'react';
import { AsyncStorageKeys } from 'src/common/constants/asyncStorageKeys';
import { getAsyncStorageItem } from 'src/common/utils/asyncStorage';
import { context } from 'src/context';

export const useRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    state: { user },
  } = useContext(context);
  useEffect(() => {
    (async () => {
      const userStorage = await getAsyncStorageItem(
        AsyncStorageKeys.USER_DATA_LOGIN_GETBYID,
      );
      if (userStorage) {
        setIsAuthenticated(true);
        return;
      }
      setIsAuthenticated(user.uuid !== '');
    })();
  }, [user]);

  return { isAuthenticated };
};
