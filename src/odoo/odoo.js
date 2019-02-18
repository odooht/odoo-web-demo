
const records = {
  1: {id:1, name: 'n1', email: 'n1@mail'},
  2: {id:2, name: 'n2', email: 'n2@mail'},
}

class Odoo {
  constructor() {
    this.user = {}
  }

  async login({login, password}){
    this.user = {
      username: login,
      name: login,
      uid:1,
      session_id: `sid_${login}`,
    }
    return `sid_${login}`
  }

  async get_records(){
    return Object.values(records)
  }

  get_treeview(){
    return [
      { title: '名称', dataIndex: 'name', },
      { title: '邮箱', dataIndex: 'email', },

    ]
  }

}


export default Odoo

