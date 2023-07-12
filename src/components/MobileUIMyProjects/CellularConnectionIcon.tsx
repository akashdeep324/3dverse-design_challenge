import { memo, SVGProps } from 'react';

const CellularConnectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5425 0.666668H16.5053C15.9325 0.666668 15.4681 1.11438 15.4681 1.66667V10.3333C15.4681 10.8856 15.9325 11.3333 16.5053 11.3333H17.5425C18.1154 11.3333 18.5798 10.8856 18.5798 10.3333V1.66667C18.5798 1.11438 18.1154 0.666668 17.5425 0.666668ZM11.6649 3H12.7021C13.275 3 13.7393 3.44772 13.7393 4V10.3333C13.7393 10.8856 13.275 11.3333 12.7021 11.3333H11.6649C11.092 11.3333 10.6277 10.8856 10.6277 10.3333V4C10.6277 3.44772 11.092 3 11.6649 3ZM7.86169 5.33333H6.82446C6.25162 5.33333 5.78723 5.78105 5.78723 6.33333V10.3333C5.78723 10.8856 6.25162 11.3333 6.82446 11.3333H7.86169C8.43454 11.3333 8.89893 10.8856 8.89893 10.3333V6.33333C8.89893 5.78105 8.43454 5.33333 7.86169 5.33333ZM3.02127 7.33333H1.98404C1.41119 7.33333 0.946808 7.78105 0.946808 8.33333V10.3333C0.946808 10.8856 1.41119 11.3333 1.98404 11.3333H3.02127C3.59412 11.3333 4.0585 10.8856 4.0585 10.3333V8.33333C4.0585 7.78105 3.59412 7.33333 3.02127 7.33333Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(CellularConnectionIcon);
export { Memo as CellularConnectionIcon };