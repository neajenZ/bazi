// import React from 'react';

// // Конфигурация китайского 60-летнего календаря
// const heavenlyStems = ['Jia', 'Yi', 'Bing', 'Ding', 'Wu', 'Ji', 'Geng', 'Xin', 'Ren', 'Gui'];
// const earthlyBranches = ['Zi', 'Chou', 'Yin', 'Mao', 'Chen', 'Si', 'Wu', 'Wei', 'Shen', 'You', 'Xu', 'Hai'];
// const animalSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

// const getChineseDate = (startYear: number, date: Date) => {
//   // Начало цикла китайского календаря - 4 февраля 1984 года
//   const baseDate = new Date(1984, 1, 4); // Месяцы в JavaScript начинаются с 0
//   const deltaDays = Math.floor((date.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));

//   // Определяем индекс в 60-летнем цикле
//   const cycleIndex = deltaDays % 60;
//   const stem = heavenlyStems[cycleIndex % 10];
//   const branch = earthlyBranches[cycleIndex % 12];
//   const animal = animalSigns[cycleIndex % 12];
//   return `${stem}-${branch} (${animal})`;
// };

// const generateMonth = (year: number, month: number) => {
//   const weeks: (string | null)[][] = [];
//   const firstDay = new Date(year, month, 1);
//   const lastDay = new Date(year, month + 1, 0);

//   let week: (string | null)[] = Array(firstDay.getDay()).fill(null);

//   for (let day = 1; day <= lastDay.getDate(); day++) {
//     const date = new Date(year, month, day);
//     week.push(getChineseDate(year, date));

//     if (week.length === 7) {
//       weeks.push(week);
//       week = [];
//     }
//   }

//   if (week.length > 0) {
//     weeks.push([...week, ...Array(7 - week.length).fill(null)]);
//   }

//   return weeks;
// };

// const Calendar: React.FC = () => {
//   const year = new Date().getFullYear();
//   const months = Array.from({ length: 12 }, (_, i) => generateMonth(year, i));

//   return (
//     <div className="calendar">
//       {months.map((weeks, monthIndex) => (
//         <div key={monthIndex} className="month">
//           <h3>{new Date(year, monthIndex, 1).toLocaleString('default', { month: 'long' })}</h3>
//           <table>
//             <thead>
//               <tr>
//                 {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
//                   <th key={index}>{day}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {weeks.map((week, weekIndex) => (
//                 <tr key={weekIndex}>
//                   {week.map((day, dayIndex) => (
//                     <td key={dayIndex} className={day ? 'filled' : 'empty'}>
//                       {day}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Calendar

import { Calendar } from '@widjets/Calendar';
import { AddBazi } from '@features/AddBazi';
import styles from './Calendar.module.css';
import { useEffect, useState } from 'react';
import { ClientsList } from '@entities/ClientsList';
import { Client } from '@entities/Client';
import dayjs from 'dayjs';
import { BaziCalendar } from '@features/BaziCalendar';

const CalendarPage = () => {
  const [step, setStep] = useState<'choice' | 'bazi' | 'confirm'>('bazi');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const mock_user = {
    name: 'Larry Machigo',
    gender: 'Male',
    email: 'gab@g.com',
    phone: '78312321',
    remarks: 'dasdsadadada',
    country: 'Italia',
    date_of_birth: '10.10.1000',
    address: 'Ola',
  };

  return (
    <div className={styles.background}>
      <div className={styles.window}>
        {step === 'bazi' ? (
          <div className={styles.wrapper}>
            <Calendar onDateSelect={setSelectedDate} />
            <AddBazi onAdd={(value) => setStep(value)} />
            <BaziCalendar />
          </div>
        ) : step === 'choice' ? (
          <div className={styles.clientList}>
            <h6>Clients</h6>
            <ClientsList onSelect={() => setStep('confirm')} />
          </div>
        ) : step === 'confirm' ? (
          <Client
            onBack={() => setStep('choice')}
            onSelect={() => setStep('bazi')}
            data={mock_user}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CalendarPage;
