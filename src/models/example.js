export default {

  namespace: 'example',

  state: {
    age:10
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
      return { ...state, age:action.payload };
    },
  },

};
