import React,{ PureComponent} from 'react';
import { connect } from 'dva';
import {} from 'antd';

@connect(({ example,app }) => ({
  example,app
}))
 class Call extends PureComponent{

  render(){

    return (
    <div>通话</div>

    );
  }

}

Call.propTypes = {
};

export default connect()(Call);
