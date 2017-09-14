import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DownloadAPP from './DownloadAPP'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DownloadAPP />, document.getElementById('root'));
registerServiceWorker();
