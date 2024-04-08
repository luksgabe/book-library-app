import { Outlet } from "react-router-dom"
import { Header } from "../components/shared/header/Header"

function MyLayout() {
    return (
        <>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default MyLayout