import React, { FC } from 'react';
import { IUsersData } from '../../../interface/IUsers';

interface IProps {
  quest: IUsersData;
}

const UserCard: FC<IProps> = ({ quest }) => {
  return (
    <div>
      <p>{quest.question}</p>
      <div>{quest.answers}</div>
    </div>
  );
};

export default UserCard;
