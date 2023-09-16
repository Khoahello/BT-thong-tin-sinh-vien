import axios from 'axios'
import React, { Component } from 'react'
import Item from './Item';
import { connect } from 'react-redux';
import { BASE_URL_DSSV } from './constant';
import { SET_USERS } from './redux/userReducer';

class List extends Component {
  componentDidMount() {
    axios
      .get(BASE_URL_DSSV)
      .then((res) => {
        console.log(res);
        this.props.handleSetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderTbody = () => {
    return this.props.users.map((user, index) => <Item user={user} key={index} />);
  };
  render() {
    return (
      <div className='mt-5'>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Mã sinh viên</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUsers: (users) => {
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    },
  };
};
let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);