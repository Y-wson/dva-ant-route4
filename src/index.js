import dva from 'dva';
import './index.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 1. Initialize
export const app = dva();

// 2. Plugins
// app.use({});



// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
