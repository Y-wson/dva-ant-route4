import React,{ PureComponent} from 'react';
import { connect } from 'dva';
import {} from 'antd';

@connect(({ example,app }) => ({
  example,app
}))
 class Speak extends PureComponent{

  render(){

    return (
    <div>讲话</div>

    );
  }

}

Speak.propTypes = {
};

export default connect()(Speak);
