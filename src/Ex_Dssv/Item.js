import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { id, sdt, name, email } = this.props.user;
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
