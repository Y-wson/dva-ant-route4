import React, { Component } from 'react'
import { connect } from 'dva'
import HeaderSection from './HeaderSection'
import { withRouter } from 'dva/router'
class MainLayout extends Component {
  render() {

    const { children, location } = this.props;
debugger;
    return (
      <div >
        <HeaderSection location={location}/>
        <div >
            {children}
        </div>
      </div>
    )
  }
}

export default withRouter(
  connect(({ app, loading }) => ({
    app,
    loading
  }))(MainLayout)
)
