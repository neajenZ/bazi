import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from 'react';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Burger = ({ className, ...props }: IProps) => (
  <div className={`burger-mobile ${className}`} {...props}>
    <div className="burger-mobile-box">
      <div className="burger-mobile-line"></div>
    </div>
  </div>
);