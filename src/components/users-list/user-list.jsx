import "./user-list.css";
import React from "react";
import { Skeleton } from "./skeleton";
import { UserItem } from "../user-item/user-item";
export const UserList = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
  isDisabled,
}) => {
  return (
    <div className="form__list">
      <input
        type="text"
        placeholder="Найти пользователя..."
        className="find"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      <div className="users_list">
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <ul className="users-list">
            {items
              .filter((item) => {
                const fullName = (item.first_name + " " + item.last_name)
                  .toLowerCase()
                  .trim();
                return (
                  fullName.includes(searchValue.toLowerCase()) ||
                  item.email.includes(searchValue.toLowerCase())
                );
              })
              .map((item) => (
                <UserItem
                  isInvited={invites.includes(item.id)}
                  key={item.id}
                  {...item}
                  onClickInvite={onClickInvite}
                />
              ))}
          </ul>
        )}
      </div>
      <button
        onClick={onClickSendInvites}
        className="btn-send"
        disabled={invites.length !== 0 ? !isDisabled : isDisabled}
      >
        Отправить приглашение
      </button>
    </div>
  );
};
