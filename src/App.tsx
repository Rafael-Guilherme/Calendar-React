import ButtonTheme from "./components/buttonTheme/ButtonTheme"
import Header from "./components/header/Header"
import TableMonth from "./components/tableMonth/TableMonth"


function App() {
  return (
    <div className="bg-white dark:bg-[#2c2c2c]">
      <div className="flex items-center justify-end mr-16 pt-4">
        <ButtonTheme />
      </div>
      <div className="flex flex-col items-center overflow-hidden h-[920px] m-16 mt-4 p-4 border-2 bg-white dark:bg-[#2c2c2c] dark:border-white border-black rounded-xl shadow-shadow-light-calendar dark:shadow-shadow-calendar">
        <Header />
        <div className="flex items-center justify-center mb-4">
          <TableMonth />
        </div>
      </div>
    </div>
  )
}

export default App
