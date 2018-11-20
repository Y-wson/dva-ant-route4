import React from 'react';
import { Route, Switch,routerRedux  } from 'dva/router'
import dynamic from 'dva/dynamic' // 路由按需加载
import MainLayout from "./components/MainLayout";
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {app} from "./index";
const { ConnectedRouter } = routerRedux;

const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({namespace}) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
);


function addModels(models) {
  let modelsArr=[];
  models.forEach((model) => {
    if (modelNotExisted(app, model)) {
      modelsArr.push(import(`./models/${model}`));
    }
  });
  return modelsArr;
}

function RouterConfig({ history,app }) {
  const Meeting = dynamic({
    app,
    models:()=> addModels(["app"]),
    component: () => import('./routes/Meeting/Meeting')
})
  const Plan = dynamic({
    app,
    component: () => import('./routes/Plan/Plan')
})
  const Speak = dynamic({
    app,
    component: () => import('./routes/Speak/Speak')
})
  const Call = dynamic({
    app,
    component: () => import('./routes/Call/Call')
})

  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter  history={history}>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Meeting} />
            <Route path="/plan"  component={Plan} />
            <Route path="/speak"  component={Speak} />
            <Route path="/call"  component={Call} />
            <Route path="/meeting"  component={Meeting} />
          </Switch>
        </MainLayout>
      </ConnectedRouter >
    </LocaleProvider>
  );
}

export default RouterConfig;
