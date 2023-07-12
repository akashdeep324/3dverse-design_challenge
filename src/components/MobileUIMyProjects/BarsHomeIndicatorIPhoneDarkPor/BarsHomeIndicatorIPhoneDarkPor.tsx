import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarsHomeIndicatorIPhoneDarkPor.module.css';

interface Props {
  className?: string;
  classes?: {
    homeIndicator?: string;
    root?: string;
  };
}
/* @figmaId 113:19 */
export const BarsHomeIndicatorIPhoneDarkPor: FC<Props> = memo(function BarsHomeIndicatorIPhoneDarkPor(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.homeIndicator || ''} ${classes.homeIndicator}`}></div>
    </div>
  );
});
