import { useState, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"


const Button = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return (
        <div
            onClick={handleThemeSwitch}
            className='flex items-center justify-center cursor-pointer ml-4 mb-1 text-black dark:text-white border-2 dark:border-white border-black w-32 h-12 rounded-xl'>
            {theme === "dark" ?
                (
                    <>
                        <BsFillMoonStarsFill className='mr-2 text-black dark:text-white' />
                        <p className='font-bold'>Dark Mode</p>
                    </>
                ) : (
                    <>
                        <BsFillSunFill className='mr-2 text-black dark:text-white' />
                        <p className='font-bold'>Light Mode</p>
                    </>
                )}
        </div>
    )
}

export default Button