import "./user-item.css";
import Avatar from "./219983.png";
import Plus from "./plus.svg";
import Minus from "./minus.svg";
export const UserItem = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) => {
  return (
    <div className="user-item">
      <img src={avatar} className="avatar" alt="" />
      <div className="data-item">
        <div className="name">
          {first_name} {last_name}
        </div>
        <div className="email">{email}</div>
      </div>
      <img
        onClick={() => onClickInvite(id)}
        src={`${isInvited ? Minus : Plus}`}
        alt=""
        className="action"
      />
    </div>
  );
};
