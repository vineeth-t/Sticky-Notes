import { themeChanger, useThemeContext } from "../Context/themeContext";

export const ToggleOn = () => {
    const { theme, setTheme } = useThemeContext();
    return (
        <svg onClick={()=>{setTheme('Dark');themeChanger(theme)}} width="2.5em" height="2.5em" viewBox="0 0 24 24">
            <path
                d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                fill="currentColor"
            ></path>
        </svg>
    )
}
export const ToggleOff = () => {
    const { theme, setTheme } = useThemeContext();
    return (<svg onClick={()=>{setTheme('Light');themeChanger(theme)}} width="2.5em" height="2.5em" viewBox="0 0 24 24">
        <path
            d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6m0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4m0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
            fill="currentColor"
        ></path>
    </svg>)
}