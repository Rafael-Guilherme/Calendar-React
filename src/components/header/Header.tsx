import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import CalendarButton from "../calendarButton/CalendarButton"

const Header = () => {

    const currentMonth = format(new Date(), 'MMMM', { locale: ptBR })
    const currentMonthCapitalized = capitalizeFirstLetter(currentMonth)
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl dark:text-white">Calendário</h1>
                    <h2 className="text-xl font-bold dark:text-white">{currentMonthCapitalized} - {currentYear}</h2>
                </div>
                <div className="flex">
                    <CalendarButton styles="w-28" text="Editar" />
                    <CalendarButton styles="w-28" text="Adicionar" />
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <CalendarButton styles="w-32" text="Filtro do mês" />
                <CalendarButton styles="w-28" text="Filtro do ano" />
                <CalendarButton styles="w-28" text="View" />
            </div>
        </div>
    )
}

export default Header