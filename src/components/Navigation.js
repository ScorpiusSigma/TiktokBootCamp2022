import {Link} from "react-router-dom";

function Navigation() {
    return (
        <>
             <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-300">
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                    <Link to = "/">Home</Link>
                    </li>
                    <li>
                    <Link to = "/player-screen">Player</Link>
                    </li>
                    <li>
                    <Link to = "/bot-screen">Bot</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;