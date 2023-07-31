
const Header = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl dark:text-white">Calendário</h1>
                    <h2 className="text-xl font-bold dark:text-white">Julho 2023</h2>
                </div>
                <div className="flex">
                    <button className="dark:text-white text-black dark:border-white border-2 border-black font-semibold w-28 h-10 rounded-xl mr-4 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-buttons">Editar</button>
                    <button className="dark:text-white text-black dark:border-white border-2 border-black font-semibold w-28 h-10 rounded-xl mr-4 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-buttons">Adicionar</button>
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <button className="dark:text-white text-black dark:border-white border-2 border-black font-semibold w-32 h-10 rounded-xl mr-4 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-buttons">filtro do mês</button>
                <button className="dark:text-white text-black dark:border-white border-2 border-black font-semibold w-28 h-10 rounded-xl mr-4 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-buttons">filtro do ano</button>
                <button className="dark:text-white text-black dark:border-white border-2 border-black font-semibold w-28 h-10 rounded-xl mr-4 hover:-translate-y-1 hover:shadow-shadow-light-calendar dark:hover:shadow-shadow-buttons">View</button>
            </div>
        </div>
    )
}

export default Header