import { useEffect, useState } from "react";
import "./App.css";
import { UserList } from "./components/users-list/user-list";
import { Success } from "./components/success/success";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [seccess, setSeccess] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSeccess(true);
  };

  return (
    <div className="App">
      {seccess ? (
        <Success count={invites.length} />
      ) : (
        <UserList
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          onClickInvite={onClickInvite}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
          isDisabled={isDisabled}
        />
      )}
    </div>
  );
}

export default App;
