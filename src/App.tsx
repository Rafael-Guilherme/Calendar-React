import Button from "./components/button/Button"
import Header from "./components/header/Header"
import TableMonth from "./components/tableMonth/TableMonth"


function App() {
  return (
    <div className="bg-white dark:bg-[#2c2c2c]">
      <div className="flex items-center justify-end mr-16 pt-4">
        <Button />
      </div>
      <div className="flex flex-col items-center overflow-x-hidden m-16 mt-4 p-4 border-2 dark:border-white border-black rounded-xl dark:shadow-shadow-calendar">
          <Header />
        <div className="flex items-center justify-center h-screen">
          <TableMonth />
        </div>
      </div>
    </div>
  )
}

export default App
