import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BarsHomeIndicatorIPhoneDarkPor } from './BarsHomeIndicatorIPhoneDarkPor/BarsHomeIndicatorIPhoneDarkPor';
import { BarsStatusBarIPhoneDark } from './BarsStatusBarIPhoneDark/BarsStatusBarIPhoneDark';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { EllipseIcon } from './EllipseIcon.js';
import { EpArrowDownIcon } from './EpArrowDownIcon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import { MessageCircleIcon } from './MessageCircleIcon.js';
import classes from './MobileUIMyProjects.module.css';
import { Shield4Icon } from './Shield4Icon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 8:31 */
export const MobileUIMyProjects: FC<Props> = memo(function MobileUIMyProjects(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame11}>
        <div className={classes.lOGO}>LOGO</div>
        <div className={classes.bitmap}>
          <div className={classes.steamStore}>My video games</div>
        </div>
        <div className={classes.avatar}>
          <div className={classes.ellipse}>
            <EllipseIcon className={classes.icon3} />
          </div>
          <div className={classes.jB}>JB</div>
        </div>
      </div>
      <div className={classes.frame15}>
        <div className={classes.group14}>
          <div className={classes.group5}>
            <div className={classes.rectangle}></div>
            <div className={classes.topSellers}>All Games</div>
          </div>
          <div className={classes.group6}>
            <div className={classes.rectangle2}></div>
            <div className={classes.freeToPlay}>My Games</div>
          </div>
          <div className={classes.frame3}>
            <div className={classes.group7}>
              <div className={classes.rectangle3}></div>
              <div className={classes.earlyAccess}>Suggested</div>
            </div>
          </div>
        </div>
        <div className={classes.frame14}>
          <div className={classes.frame12}>
            <div className={classes.sort}>Sort </div>
            <div className={classes.epArrowDown}>
              <EpArrowDownIcon className={classes.icon4} />
            </div>
          </div>
          <div className={classes.frame13}>
            <div className={classes.latestPlayed}>latest played</div>
          </div>
        </div>
      </div>
      <div className={classes.frame10}>
        <div className={classes.frame7}>
          <div className={classes.mask}></div>
          <div className={classes.bitmap2}></div>
          <div className={classes.image3}></div>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
          <div className={classes.group52}>
            <div className={classes.recommendedByYour}>Aline suggested this game with you, 3 months ago</div>
            <div className={classes.deadByDaylight}>The Legend of Zelda</div>
            <div className={classes.frame6}>
              <div className={classes.recommendedByYour2}>Made by</div>
              <div className={classes.image2}></div>
            </div>
          </div>
        </div>
        <div className={classes.frame8}>
          <div className={classes.mask2}></div>
          <div className={classes.bitmap3}></div>
          <div className={classes.image32}></div>
          <div className={classes.rectangle6}></div>
          <div className={classes.rectangle7}></div>
          <div className={classes.group53}>
            <div className={classes.deadByDaylight2}>The Legend of Zelda</div>
            <div className={classes.recommendedByYour3}>Aline suggested this game with you, 3 months ago</div>
            <div className={classes.frame62}>
              <div className={classes.recommendedByYour4}>Made by</div>
              <div className={classes.image4}></div>
            </div>
          </div>
        </div>
        <div className={classes.frame102}>
          <div className={classes.mask3}></div>
          <div className={classes.bitmap4}></div>
          <div className={classes.image7}></div>
          <div className={classes.rectangle8}></div>
          <div className={classes.rectangle9}></div>
          <div className={classes.group54}>
            <div className={classes.deadByDaylight3}>Assassin’s Creed Mirage</div>
            <div className={classes.recommendedByYour5}>Upcoming</div>
            <div className={classes.frame63}>
              <div className={classes.recommendedByYour6}>Made by</div>
              <div className={classes.image6}></div>
            </div>
          </div>
        </div>
        <div className={classes.frame9}>
          <div className={classes.mask4}></div>
          <div className={classes.bitmap5}></div>
          <div className={classes.image8}></div>
          <div className={classes.rectangle10}></div>
          <div className={classes.rectangle11}></div>
          <div className={classes.group55}>
            <div className={classes.deadByDaylight4}>Prince of Persia : The Lost Crown</div>
            <div className={classes.recommendedByYour7}>Aline suggested this game with you, 3 min ago</div>
            <div className={classes.frame64}>
              <div className={classes.recommendedByYour8}>Made by</div>
              <div className={classes.image62}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame16}>
        <div className={classes.rectangle12}></div>
        <BarsHomeIndicatorIPhoneDarkPor
          className={classes.barsHomeIndicatorIPhoneLightPo}
          classes={{ homeIndicator: classes.homeIndicator }}
        />
        <div className={classes.frame21}>
          <div className={classes.frame18}>
            <div className={classes.group}>
              <GroupIcon className={classes.icon5} />
            </div>
            <div className={classes.recommendedByYour9}>My Games</div>
          </div>
          <div className={classes.frame17}>
            <div className={classes.shield4}>
              <Shield4Icon className={classes.icon6} />
            </div>
            <div className={classes.recommendedByYour10}>News</div>
          </div>
          <div className={classes.frame19}>
            <div className={classes.messageCircle}>
              <MessageCircleIcon className={classes.icon7} />
            </div>
            <div className={classes.recommendedByYour11}>Support</div>
          </div>
          <div className={classes.frame20}>
            <div className={classes.group2}>
              <GroupIcon2 className={classes.icon8} />
            </div>
            <div className={classes.recommendedByYour12}>Company</div>
          </div>
        </div>
      </div>
      <BarsStatusBarIPhoneDark
        className={classes.statusBar}
        classes={{ battery: classes.battery, wifi: classes.wifi, cellularConnection: classes.cellularConnection }}
        swap={{
          wifi: (
            <div className={classes.wifi}>
              <WifiIcon className={classes.icon} />
            </div>
          ),
          cellularConnection: (
            <div className={classes.cellularConnection}>
              <CellularConnectionIcon className={classes.icon2} />
            </div>
          ),
        }}
        text={{
          time: <div className={classes.time}>9:41</div>,
        }}
      />
    </div>
  );
});
