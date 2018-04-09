import React,{ PureComponent} from 'react';
import { connect } from 'dva';
import {Button } from 'antd'

@connect(({ example,app }) => ({
  example,app
}))
 class IndexPage extends PureComponent{

  handleClick=()=>{
    this.props.dispatch({
      type:"app/fetch",
      payload:"孙悟空"
    });
  }
  handleAgeClick=()=>{
    this.props.dispatch({
      type:"example/fetch",
      payload:20
    });
  }

  render(){
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>{this.props.app.name}</Button>
        <Button type="primary" onClick={this.handleAgeClick}>{this.props.example.age}</Button>
      </div>

    );
  }

}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
