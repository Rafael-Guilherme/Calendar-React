
const TableMonth = () => {
  const numDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  return (
    <div className="grid grid-cols-7 w-[1180px] mt-4">
      {numDays.map((item) => (
        <div key={item} className="dark:text-white text-black border-2 dark:border-white border-black h-32 p-2 hover:-translate-y-1 dark:hover:shadow-shadow-calendar-days-hover">
          {item}
        </div>
      ))}
    </div>
  )
}

export default TableMonth