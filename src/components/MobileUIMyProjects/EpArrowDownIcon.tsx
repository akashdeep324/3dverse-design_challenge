import { memo, SVGProps } from 'react';

const EpArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.8104 5.65887L8.5 10.8354L3.18962 5.65887C3.09474 5.5662 2.96738 5.51432 2.83475 5.51432C2.70212 5.51432 2.57475 5.5662 2.47987 5.65887C2.43393 5.70389 2.39744 5.75761 2.37252 5.81691C2.3476 5.8762 2.33477 5.93987 2.33477 6.00419C2.33477 6.0685 2.3476 6.13217 2.37252 6.19147C2.39744 6.25076 2.43393 6.30449 2.47987 6.3495L8.12918 11.8575C8.22839 11.9542 8.36145 12.0083 8.5 12.0083C8.63854 12.0083 8.7716 11.9542 8.87081 11.8575L14.5201 6.35056C14.5664 6.30552 14.6032 6.25166 14.6283 6.19217C14.6534 6.13268 14.6663 6.06876 14.6663 6.00419C14.6663 5.93961 14.6534 5.8757 14.6283 5.81621C14.6032 5.75672 14.5664 5.70286 14.5201 5.65781C14.4252 5.56514 14.2979 5.51326 14.1652 5.51326C14.0326 5.51326 13.9052 5.56514 13.8104 5.65781V5.65887Z'
      fill='#A9A9A9'
    />
  </svg>
);
const Memo = memo(EpArrowDownIcon);
export { Memo as EpArrowDownIcon };
