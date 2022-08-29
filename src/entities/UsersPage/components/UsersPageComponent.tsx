import React, { FC } from 'react';
import { IUsersData } from '../../../interface/IUsers';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsersData[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  // console.log(usersDataAttr);

  return (
    <div>
      {usersDataAttr.length ? (
        usersDataAttr.map((quest) => {
          return (
            <React.Fragment key={`QuestId:${quest.question}`}>
              <UserCard quest={quest} />
            </React.Fragment>
          );
        })
      ) : (
        <div>У матросов нет вопросов</div>
      )}
    </div>
  );
};

export default UsersPageComponent;
