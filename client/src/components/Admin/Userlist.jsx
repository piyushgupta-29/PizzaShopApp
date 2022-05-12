import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Table,Button } from "react-bootstrap";
import { changeAdmin, deleteUser, getAllUsers } from "../../actions/userAction";
import Loader from "./../Loader";
import Error from "./../Error";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>User List</h1>
      {loading && <div className="d-flex justify-content-center align-items-center" style={{height: "70vh"}}>
          	<Loader />
          </div>}
      {error && <Error error="Error While Fetching Users" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Is Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {
                  user.isAdmin ? 
                  <Button
                      className="btn-danger"
                      onClick={() => {
                        dispatch(changeAdmin(user._id));
                      }}
                    >
                      Remove Admin
                  </Button>
                  : 
                  <Button
                    className="btn-success"
                    onClick={() => {
                      dispatch(changeAdmin(user._id));
                    }}
                  >
                    Make Admin
                  </Button>
                }
                </td>
                <td>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Userlist;
