import { Link, Outlet } from "react-router-dom"

const TreeMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/tree/bing1"}>Tree</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default TreeMenu