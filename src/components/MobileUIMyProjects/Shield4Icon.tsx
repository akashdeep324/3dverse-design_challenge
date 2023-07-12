import { memo, SVGProps } from 'react';

const Shield4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.75 27C11.75 27 22.9244 21.6 22.9244 13.5V4.05L11.75 0L0.575596 4.05V13.5C0.575596 21.6 11.75 27 11.75 27Z'
      stroke='#4B5664'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(Shield4Icon);
export { Memo as Shield4Icon };
