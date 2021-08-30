import React, { Fragment } from "react";

const Users = ({ user }) => {
  return (
    <Fragment>
      name: {user.name} <br />
      email: {user.email}
      <br />
    </Fragment>
  );
};

export default Users;
