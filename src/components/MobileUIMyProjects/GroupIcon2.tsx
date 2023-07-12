import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.927 27.3375H3.57302C1.74234 27.3375 0.299791 25.8309 0.439645 24.0676L1.63862 8.99705C1.70148 8.20426 2.38347 7.59373 3.20531 7.59373H22.2947C23.1165 7.59373 23.7985 8.20426 23.8614 8.99553L25.0604 24.0661C25.2018 25.8309 23.7577 27.3375 21.927 27.3375V27.3375Z'
      stroke='#4B5664'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.4644 7.59373V6.07498C6.4644 2.72006 9.27878 -2.44141e-05 12.75 -2.44141e-05C16.2212 -2.44141e-05 19.0356 2.72006 19.0356 6.07498V7.59373'
      stroke='#4B5664'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
