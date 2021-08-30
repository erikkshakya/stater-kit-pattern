import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUsersFetch } from "./actions/actions";
import Creators from "./actions/actions";
import Users from "./views/Users/Users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Creators.userRequest());
  }, [dispatch]);

  const { users } = useSelector((state) => state.user);
  console.log("111111", users);

  return (
    <div className="App">
      {users && users.map((user) => <Users user={user} key={user.id} />)}
      hello
    </div>
  );
}

export default App;
