import { message } from 'antd';
import axios from 'axios';
import React, { Component } from 'react'
import { BASE_URL_DSSV } from './constant';

export default class Form extends Component {
    state = {
        id: "",
        sdt: "",
        name: "",
        email: "",
      };
      handleChangeForm = (e) => {
        var { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleCreate = () => {
        console.log("create", this.state);
        axios
          .post(BASE_URL_DSSV, this.state)
          .then((res) => {
            message.success("Thêm thành công");
          })
          .catch((err) => {
            message.error("Đã có lỗi xảy ra");
          });
      };
  render() {
    return (
      <div>
        <h1 className='text-white bg-dark'>Thông tin sinh viên</h1>
        <div className="row">
            <div className="col-6">
                <div class="form-group">
                      <label for="">Mã SV</label>
                      <input onChange={this.handleChangeForm} type="text" class="form-control" name='id' placeholder="" />
                </div>
                <div class="form-group">
                      <label for="">Số điện thoại</label>
                      <input onChange={this.handleChangeForm} type="tel" class="form-control" name='sdt' placeholder="" />
                </div>
            </div>
            <div className="col-6">
                <div class="form-group">
                      <label for="">Họ tên</label>
                      <input onChange={this.handleChangeForm} type="text" class="form-control" name='name' placeholder="" />
                </div>
                <div class="form-group">
                      <label for="">Email</label>
                      <input onChange={this.handleChangeForm} type="email" class="form-control" name='email' placeholder="" />
                </div>
            </div>
            <button type="button" onClick={this.handleCreate} className="btn btn-success ">
            Thêm sinh viên
          </button>
        </div>
      </div>
    )
  }
}
