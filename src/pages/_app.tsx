import '../styles/pages/app.css';
import 'primereact/resources/themes/vela-orange/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css';

import { AppProps } from 'next/app';

import ControlPanelHeader from '@/component/header/ControlPanelHeader';
import ControlPanelVerticalMenu from '@/component/vertical-menu/ControlPanelVerticalMenu';
import MinikubeStatus from '@/component/vertical-menu/MinikubeStatus';
import { useState } from 'react';


const MinikubeControlPanel = ({ Component, pageProps }: AppProps) => {
  const [minikubeRunning] = useState(false);
  return (
    <div className="main-wrapper">
      <ControlPanelHeader />

      <div className="flex-horizontal menu">
        <div className="flex-vertical">
          <ControlPanelVerticalMenu/>
          <MinikubeStatus minikubeRunning={minikubeRunning}/>
        </div>

        <Component {...pageProps} />
      </div>
    </div>
  );
};
export default MinikubeControlPanel;
