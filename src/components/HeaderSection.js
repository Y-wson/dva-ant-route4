/**
 * Created by Administrator on 2018/11/20 0020.
 */
import React, { Component } from 'react'
import { Menu} from 'antd'
import { connect } from 'dva'

import { Link } from 'dva/router'

class HeaderSection extends Component {
  render() {
    const { location } = this.props
    return (
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="1"><Link to="/meeting">会议</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/plan">预案</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/speak">讲话</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/call"> 通话</Link></Menu.Item>
      </Menu>
    )
  }
}

export default connect()(HeaderSection)
