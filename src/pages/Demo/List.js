import odoo from '@/odoo'


import React from 'react';

import { Table } from 'antd';




class List extends React.Component {
  state = {
      ids: [],
      recordsList: [],
      treeview: [],
  }

  async componentDidMount() {
    const recordsList = await odoo.get_records()

    const treeview = odoo.get_treeview()

    this.setState({recordsList, treeview})
  }


  render() {
    const {  treeview, recordsList } = this.state;
    return (
      <div>
        <div> 这是一个列表展示页面</div>
        <div> 应该有标题 </div>
        <div> 应该有新增按钮 </div>
        <div> 示例展示用的是 table 组件 </div>
        <div> 还可能用什么组件显示列表? 比如 {'<ul><li>'}   </div>
        <Table columns={treeview} dataSource={recordsList} rowKey="id" />
      </div>
    );
  }
}

export default List;





