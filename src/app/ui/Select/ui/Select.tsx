import { ComponentProps, useState } from 'react';
import { ArrowDown } from '../../../icons/ArrowDown.tsx';
import styles from './Select.module.css';

interface IOption {
  value: string;
  label: string;
}

interface IProps extends ComponentProps<'div'> {
  label: string;
  variant?: 'filled' | 'outlined';
  noLabel?: boolean;
  options: IOption[];
}

export const Select = ({
  label,
  noLabel = false,
  options,
  variant = 'filled',
  ...props
}: IProps) => {
  const [selectedItem, setSelectedItem] = useState<IOption | null>(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.body}>
      {!noLabel && <label htmlFor="">{label}</label>}
      <div className={styles.selectBody} onClick={() => setOpen(!isOpen)} {...props}>
        <span>{selectedItem?.label || label}</span>
        <ArrowDown />

        {isOpen && (
          <div className={styles.menu}>
            {options.map((i) => (
              <div key={i.value} onClick={() => setSelectedItem(i)} className={styles.option}>
                {i.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
