import React, { Component } from "react";
import { connect } from "react-redux";

export default class Item extends Component {
  render() {
    let { id, sdt, name, email } = this.props.user;
    console.log("test",this.props);
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{sdt}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-info">Edit</button>
        </td>
      </tr>
    );
  }
}