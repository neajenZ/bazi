import styles from './LabelSection.module.css';

interface IProps {
  text: string;
  variant?: 'left' | 'right';
  className?: string
}

export const LabelSection = ({ text, className = '', variant = 'right' }: IProps) => {
  return (
    <div className={`${styles.body} ${className} ${variant === 'left' ? styles.left : ''}`}>
      <span>{text}</span>
      <div>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0611 3.64347C14.4142 -0.0129151 19.5858 -0.012917 20.9389 3.64347L22.8125 8.70625C23.2379 9.85574 24.1443 10.7621 25.2938 11.1875L30.3565 13.0611C34.0129 14.4142 34.0129 19.5858 30.3565 20.9389L25.2938 22.8125C24.1443 23.2379 23.2379 24.1443 22.8125 25.2938L20.9389 30.3565C19.5858 34.0129 14.4142 34.0129 13.0611 30.3565L11.1875 25.2938C10.7621 24.1443 9.85574 23.2379 8.70625 22.8125L3.64347 20.9389C-0.0129151 19.5858 -0.012917 14.4142 3.64347 13.0611L8.70625 11.1875C9.85574 10.7621 10.7621 9.85574 11.1875 8.70625L13.0611 3.64347Z"
            fill="#FF7723"
          />
        </svg>
      </div>
    </div>
  );
};
