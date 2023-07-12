import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.6845 1.57536C18.8576 3.67576 18.8576 7.08117 16.6845 9.18157C14.5112 11.282 10.9877 11.282 8.81456 9.18157C6.64135 7.08117 6.64135 3.67576 8.81456 1.57536C10.9877 -0.525038 14.5112 -0.525038 16.6845 1.57536Z'
      stroke='white'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.7499 14.8608C19.1109 14.8608 25.3211 17.5162 25.3211 21.6V22.95C25.3211 23.6952 24.6953 24.3 23.9243 24.3H1.5755C0.804464 24.3 0.178698 23.6952 0.178698 22.95V21.6C0.178698 17.5149 6.38887 14.8608 12.7499 14.8608Z'
      stroke='white'
      strokeWidth={2.7}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
