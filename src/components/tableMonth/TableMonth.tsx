import { startOfMonth, endOfMonth, getDate, getDay } from 'date-fns';

const TableMonth = () => {

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const firstDayOfMonth = startOfMonth(new Date());

  const lastDayOfMonth = endOfMonth(new Date());

  const numDays = [];
  let currentDay = firstDayOfMonth;
  while (currentDay <= lastDayOfMonth) {
    numDays.push(getDate(currentDay));
    currentDay = new Date(currentDay.getTime() + 24 * 60 * 60 * 1000);
  }

  const firstDayOfWeek = getDay(firstDayOfMonth);

  const emptyCells = Array(firstDayOfWeek).fill(null);

  return (
    <div className="grid grid-cols-7 w-[1180px] mt-4">
      {weekDays.map((day) => (
        <div key={day} className="dark:text-white text-black flex items-center justify-center border-2 rounded-xl dark:border-white border-black h-14 p-2">
          {day}
        </div>
      ))}
      {emptyCells.map((_, index) => (
        <div key={`empty_${index}`} className="h-32 p-2" />
      ))}
      {numDays.map((item) => (
        <div key={item} className="dark:text-white text-black border-2 rounded-xl dark:border-white border-black h-32 p-2 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-calendar-days-hover">
          {item}
        </div>
      ))}
    </div>
  )
}

export default TableMonth