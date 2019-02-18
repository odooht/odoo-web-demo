
import React from 'react';
import { Card, Divider } from 'antd';

import LoginForm from './LoginForm'
import odoo from '@/odoo'


class List extends React.Component {
  state = {
      user: {},
  }

  async componentDidMount() {
      this.setState({user: odoo.user})
  }

  handleOk() {
    this.setState({user: odoo.user})
  }

  render() {
    const {  user } = this.state;

    return (
      <div>
        <div>登录页面</div>
        <LoginForm onOk={()=>this.handleOk()}>
        </LoginForm>

        <Divider style={{ marginBottom: 32 }} />
        <div>登录登录成功后,可以获得这些信息</div>
        <Card bordered={false}>
          <p>账号 login: {user.username}</p>
          <Divider style={{ marginBottom: 32 }} />
          <p>名称 name: {user.name}</p>
          <p>uid: {user.uid}</p>
          <p>sid: {user.session_id}</p>
        </Card>


      </div>
    );
  }
}

export default List;





