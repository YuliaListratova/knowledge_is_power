import React, { FC } from 'react';
import { IUsersData } from '../../../interface/IUsers';

interface IProps {
  usersDataAttr: IUsersData[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  // console.log(usersDataAttr);

  return (
    <div>
      <p>Список</p>
      <div>
        {usersDataAttr.length ? (
          usersDataAttr.map((quest) => {
            return (
              <div key={`QuestId:${quest.question}`}>
                <p>{quest.question}</p>
                <div>{quest.answers}</div>
              </div>
            );
          })
        ) : (
          <div>У матросов нет вопросов</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
