// Calendar.tsx
import React, { useState } from 'react';
import styles from './Calendar.module.css';
import { Input } from '@ui/Input';

interface DayData {
  day: number;
  monthOffset: number;
  rightSymbols: string[];
  bottomSymbols: string[]
}

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendarData = (year: number, monthIndex: number, month: string): DayData[] => {
  // const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  // const labels = Array(daysInMonth).fill(['非', '给']); // Заполнение стандартным текстом
  // const highlightedDays = [27]; // Пример: 27-е число выделено
  // const date = (i: number) => new Date(year, monthIndex, i + 1);
  console.log(monthIndex)
  const days: DayData[] = [];
  const daysInMonth = getDaysInMonth(year, monthIndex); // Дни текущего месяца

  // Добавляем дни текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, monthOffset: monthIndex, bottomSymbols: ['非'], rightSymbols: ['非', '给'] }); // monthOffset: 0 — текущий месяц
  }

  if (days.length < 42) {
    const nextMonth = (monthIndex + 1) % 12;
    const nextYear = monthIndex === 11 ? year + 1 : year;
    const daysInNextMonth = 42 - days.length;

    for (let i = 1; i <= daysInNextMonth; i++) {
      days.push({ day: i, monthOffset: monthIndex === 12 ? 0 : monthIndex + 1, bottomSymbols: ['非'], rightSymbols: ['非', '给'] }); // monthOffset: 1 — следующий месяц
    }
  }

  console.log(days);
  return days;
  // return Array.from({ length: daysInMonth }, (_, i) => ({
  //   day: i + 1,
  //   label: labels[i],
  //   labelDown: '非给',
  //   isHighlighted: highlightedDays.includes(i + 1),
  //   isFriday: date(i).getDay() === 5,
  // }));
};

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const Calendar: React.FC = () => {
  const [year, setYear] = useState(2026);
  const [monthIndex, setMonthIndex] = useState(1); // 0 = Январь, 1 = Февраль, и т.д.
  const [month, setMonth] = useState(months[1]); // 0 = Январь, 1 = Февраль, и т.д.
  const [day, setDay] = useState(12);
  const [time, setTime] = useState('23:25');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = e.target.value;
    if (type === 'month') {
      console.log(value);
      setMonth(value);
      const monthIdx = months.indexOf(value);
      if (monthIdx !== -1) {
        setMonthIndex(monthIdx);
        setMonth(months[monthIdx]);
      }
    } else if (type === 'year') {
      setYear(Number(value));
    } else if (type === 'day') {
      setDay(Number(value));
    } else if (type === 'time') {
      setTime(value);
    }
  };

  const days = generateCalendarData(year, monthIndex, month);

  const handlePrevMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <header className={styles.header}>
        <div className={styles.inputs}>
          <div style={{ width: '15%' }} className={styles.input}>
            <Input
              labelInto
              label="Время"
              type="text"
              value={time}
              onChange={(e) => handleInputChange(e, 'time')}
            />
          </div>
          <div style={{ width: '15%' }} className={styles.input}>
            <Input
              labelInto
              label="День"
              type="text"
              value={day}
              onChange={(e) => handleInputChange(e, 'day')}
            />
          </div>
          <div style={{ width: '50%' }} className={styles.input}>
            <Input
              labelInto
              label="Месяц"
              type="text"
              value={month}
              onChange={(e) => handleInputChange(e, 'month')}
            />
          </div>
          <div style={{ width: '15%' }} className={styles.input}>
            <Input
              label="Год"
              type="text"
              labelInto
              value={year}
              onChange={(e) => handleInputChange(e, 'year')}
            />
          </div>
        </div>
      </header>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.grid}>
        {days.map((dayData, index) => (
          <div
            key={index}
            onClick={() => {
              setDay(dayData.day)
              setMonth(months[dayData.monthOffset])
              setMonthIndex(dayData.monthOffset)
            }}
            className={`${styles.dayCell} ${dayData.day === day && dayData.monthOffset === monthIndex ? styles.highlighted : ''}`}
          >
            <div className={styles.row}>
              <span className={styles.dayNumber}>
                {dayData.day}
              </span>
              <div className={styles.dayRight}>
                {dayData.rightSymbols.map((i) => (
                  <span className={styles.label}>{i}</span>
                ))}
              </div>
            </div>
            <span className={`${styles.label} ${styles.down}`}>{dayData.bottomSymbols[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
