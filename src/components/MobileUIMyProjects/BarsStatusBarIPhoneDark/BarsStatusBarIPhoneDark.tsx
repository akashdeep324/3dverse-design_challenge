import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BarsStatusBarIPhoneXTimeDark } from '../BarsStatusBarIPhoneXTimeDark/BarsStatusBarIPhoneXTimeDark';
import classes from './BarsStatusBarIPhoneDark.module.css';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  classes?: {
    battery?: string;
    wifi?: string;
    cellularConnection?: string;
    root?: string;
  };
  swap?: {
    wifi?: ReactNode;
    cellularConnection?: ReactNode;
  };
  text?: {
    time?: ReactNode;
  };
}
/* @figmaId 113:2 */
export const BarsStatusBarIPhoneDark: FC<Props> = memo(function BarsStatusBarIPhoneDark(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.battery || ''} ${classes.battery}`}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={`${props.classes?.wifi || ''} ${classes.wifi}`}>
        {props.swap?.wifi || <WifiIcon className={classes.icon2} />}
      </div>
      <div className={`${props.classes?.cellularConnection || ''} ${classes.cellularConnection}`}>
        {props.swap?.cellularConnection || <CellularConnectionIcon className={classes.icon3} />}
      </div>
      <BarsStatusBarIPhoneXTimeDark
        className={classes.timeStyle}
        text={{
          time: props.text?.time,
        }}
      />
    </div>
  );
});
