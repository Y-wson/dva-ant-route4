import React,{ PureComponent} from 'react';
import { connect } from 'dva';
import {} from 'antd';

@connect(({ example,app }) => ({
  example,app
}))
 class Plan extends PureComponent{

  render(){

    return (
    <div>预案部分</div>

    );
  }

}

Plan.propTypes = {
};

export default connect()(Plan);
