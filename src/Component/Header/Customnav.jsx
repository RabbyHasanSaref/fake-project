import { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Customnav = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: "/", name: "Home", id: "home" },
        { path: "/about", name: "About", id: "about" },
        { path: "/services", name: "Services", id: "services" },
        { path: "/contact", name: "Contact", id: "contact" },
        { path: "/portfolio", name: "Portfolio", id: "portfolio" }
    ];

    return (
        <nav className="h-[40px]">
            <div className="md:hidden p-2" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoCloseSharp className="text-xl font-semibold"></IoCloseSharp> : <FaBars className="text-xl font-semibold"></FaBars>
                }
            </div>

            <ul className={`
            ${open ? '' : 'hidden'}
            md:flex absolute w-full justify-center py-2 px-2 bg-yellow-200 duration-1000
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Customnav;