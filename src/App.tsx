import Header from "./components/header/Header"
import TableMonth from "./components/tableMonth/TableMonth"


function App() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden m-16 p-4 border-2 border-white rounded-xl calendar-shadow">
        <Header />
      <div className="flex items-center justify-center h-screen">
        <TableMonth />
      </div>
    </div>
  )
}

export default App
