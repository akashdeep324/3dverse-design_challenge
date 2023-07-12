import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarsStatusBarIPhoneXTimeDark.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    time?: ReactNode;
  };
}
/* @figmaId 113:17 */
export const BarsStatusBarIPhoneXTimeDark: FC<Props> = memo(function BarsStatusBarIPhoneXTimeDark(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.time != null ? props.text?.time : <div className={classes.time}>9:41</div>}
    </div>
  );
});
