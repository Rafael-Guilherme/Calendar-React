
const Header = () => {
  return (
    <div className="w-full">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl">Calendário</h1>
                <h2 className="text-xl font-bold">Julho 2023</h2>
            </div>
            <div>
                <button className="bg-orange-500 text-black font-semibold w-24 h-10 rounded-xl mr-4 hover:brightness-200">Editar</button>
                <button className="bg-green-500 text-black font-semibold w-24 h-10 rounded-xl hover:brightness-200">Adicionar</button>
            </div>
        </div>
        <div className="flex items-center justify-end mt-4">
            <button className="bg-slate-500 text-black font-semibold w-24 h-10 rounded-xl hover:brightness-200">filtro do mês</button>
            <button className="bg-slate-500 text-black font-semibold w-24 h-10 rounded-xl mx-4 hover:brightness-200">filtro do ano</button>
            <button className="bg-gray-500 text-black font-semibold w-24 h-10 rounded-xl hover:brightness-200">View</button>
        </div>
    </div>
  )
}

export default Header