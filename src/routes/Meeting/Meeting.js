import React,{ PureComponent} from 'react';
import { connect } from 'dva';
import {Button,Select,Row, Col,DatePicker,Input, Table} from 'antd';
import style from "./Meeting.less";


const Search = Input.Search;
const Option = Select.Option;
const { RangePicker} = DatePicker;
@connect(({ example,app }) => ({
  example,app
}))
 class Meeting extends PureComponent{
    //select选择
    handleChange=(value)=> {
        console.log(`selected ${value}`);
    }
    //时间改变
    onChange=(date, dateString)=> {
        console.log(date, dateString);
    }
    //确定时间
    onOk=(value)=> {
        console.log('onOk: ', value);
    }
  render(){
      const columns = [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
      }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
      }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
      }];

      const data = [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
      }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
      }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
      }];

      const {app:{name}}=this.props;
    return (
      <div className="gutter-example">
          <Row className={style.header} gutter={8}>
              <Col span={2} className="gutter-row">
                  <Button type="primary">发起会议</Button>
              </Col>
              <Col span={2} className="gutter-row">
                  <Select defaultValue="全部会议" onChange={this.handleChange}>
                      <Option value="全部会议">全部会议</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                  </Select>
              </Col>
              <Col span={8} className="gutter-row">
                  <Button type="primary" style={{marginRight:"10px"}}>今天</Button>
                  <RangePicker
                      showTime={{ format: 'HH:mm' }}
                      format="YYYY-MM-DD HH:mm"
                      placeholder={['开始时间', '结束时间']}
                      onChange={this.onChange}
                      onOk={this.onOk}
                  />
              </Col>
              <Col span={4} className="gutter-row">
                  <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                  />
              </Col>
          </Row>
          <div className="body">
              <Table columns={columns} dataSource={data} showHeader={false} />
          </div>
          <Button type="primary" onClick={this.handleClick}>{name}</Button>
      </div>

    );
  }

}

Meeting.propTypes = {
};

export default connect()(Meeting);
