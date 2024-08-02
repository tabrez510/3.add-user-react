import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  const users = props.users;
  return (
    <Card className="users">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
