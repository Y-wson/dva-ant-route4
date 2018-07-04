import React from 'react';
import { Route, Switch,routerRedux  } from 'dva/router'
import dynamic from 'dva/dynamic' // 路由按需加载
import MainLayout from "./components/MainLayout";
const { ConnectedRouter } = routerRedux
function RouterConfig({ history,app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage')
  })

  return (
    <ConnectedRouter  history={history}>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </MainLayout>
    </ConnectedRouter >
  );
}

export default RouterConfig;
