interface ButtonsProps {
    text: string
    styles: string
}


const CalendarButton = ({ text, styles }: ButtonsProps) => {
  return (
    <button 
        className={`
            text-black 
            dark:text-white 
            border-2 
            border-black 
            dark:border-white 
            font-semibold 
            h-10 
            rounded-xl 
            mr-4 
            hover:-translate-y-1 
            hover:shadow-shadow-light-calendar 
            dark:hover:shadow-shadow-buttons
            ${styles}
        `}
    >
        {text}
    </button>
  )
}

export default CalendarButton