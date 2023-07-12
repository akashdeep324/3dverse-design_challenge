import { memo, SVGProps } from 'react';

const MessageCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M25.3212 11.475C25.326 13.2568 24.8953 15.0146 24.0641 16.605C22.054 20.4921 17.9446 22.9483 13.4484 22.95C11.6048 22.9547 9.78615 22.5384 8.14056 21.735L0.178795 24.3L2.83272 16.605C2.00152 15.0146 1.57079 13.2568 1.5756 11.475C1.57734 7.12948 4.11871 3.15771 8.14056 1.21501C9.78615 0.411667 11.6048 -0.00463572 13.4484 9.97083e-06H14.1468C20.1751 0.321445 24.9886 4.97367 25.3212 10.8V11.475V11.475Z'
      stroke='#4B5664'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MessageCircleIcon);
export { Memo as MessageCircleIcon };
