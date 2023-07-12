import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={20} cy={20} r={20} fill='#D9D9D9' stroke='black' strokeWidth={0.769231} />
  </svg>
);
const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
