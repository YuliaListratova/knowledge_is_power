import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interface/IUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(usersUrl)
        .then((response) => response.json())
        .then((data) => setUsersData(data));
    }, 1500);
  }, []);

  return !usersData ? (
    <div>Загрузка...</div>
  ) : (
    <UsersPageComponent usersDataAttr={usersData.data} />
  );
};

export default UsersPage;
