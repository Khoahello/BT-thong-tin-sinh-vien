import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BASE_URL_DSSV } from "./constant";
import { message } from "antd";
import { DELETE_USER, SET_USERS } from "./redux/userReducer";

class Item extends Component {
  handleDelete = (id) => {
    axios
      .delete(`${BASE_URL_DSSV}/${id}`)
      .then((res) => {
        console.log(res);
        message.success("Xóa thành công");
        axios
          .get(BASE_URL_DSSV)
          .then((res) => {
            console.log(res);
            this.props.handleSetUsers(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { id, sdt, name, email } = this.props.user;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{sdt}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.handleDelete(id)}>Delete</button>
          <button className="btn btn-info">Edit</button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    },
    handleSetUsers: (users) => {
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
