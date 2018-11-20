/**
 * Created by Administrator on 2018/3/6 0006.
 */
export default {

  namespace: 'app',

  state: {
    name:"孙悟空"
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save',payload:payload });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, name:action.payload };
    },
  },

};
