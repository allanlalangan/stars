import { MdSpaceDashboard } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GiCandleLight, GiOpenBook, GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<nav className="fixed bottom-0 z-20 flex h-[10%] w-screen flex-col items-center justify-center bg-slate-700 text-slate-50 md:h-main md:w-1/4 md:justify-between">
			<ul className="flex h-full w-full items-center justify-evenly md:flex-col md:items-start md:justify-start md:p-4">
				<li className="w-full">
					<NavLink
						to="/feed"
						className={({ isActive }) =>
							`${
								!isActive ? "border-transparent" : "border-secondary-400 shadow"
							} flex w-full cursor-pointer content-between items-center rounded border p-2 font-heading text-sm font-semibold transition md:mb-2 md:w-full`
						}
					>
						<BsStars className="mx-2 text-secondary-200" size="1.25rem" />
						<span className="hidden md:block">Feed</span>
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/dashboard"
						className={({ isActive }) =>
							`${
								!isActive ? "border-transparent" : "border-secondary-400 shadow"
							} flex w-full cursor-pointer content-between items-center rounded border p-2 font-heading text-sm font-semibold transition md:mb-2 md:w-full`
						}
					>
						<MdSpaceDashboard
							className="mx-2 text-secondary-200"
							size="1.25rem"
						/>
						<span className="hidden md:block">Dashboard</span>
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/altar"
						className={({ isActive }) =>
							`${
								!isActive ? "border-transparent" : "border-secondary-400 shadow"
							} flex w-full cursor-pointer content-between items-center rounded border p-2 font-heading text-sm font-semibold transition md:mb-2 md:w-full`
						}
					>
						<GiCandleLight className="mx-2 text-secondary-200" size="1.25rem" />
						<span className="hidden md:block">Altar</span>
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/journal"
						className={({ isActive }) =>
							`${
								!isActive ? "border-transparent" : "border-secondary-400 shadow"
							} flex w-full cursor-pointer content-between items-center rounded border p-2 font-heading text-sm font-semibold transition md:mb-2 md:w-full`
						}
					>
						<GiNotebook className="mx-2 text-secondary-200" size="1.25rem" />
						<span className="hidden md:block">Journal</span>
					</NavLink>
				</li>
				<li className="w-full">
					<NavLink
						to="/reference"
						className={({ isActive }) =>
							`${
								!isActive ? "border-transparent" : "border-secondary-400 shadow"
							} flex w-full cursor-pointer content-between items-center rounded border p-2 font-heading text-sm font-semibold transition md:mb-2 md:w-full`
						}
					>
						<GiOpenBook className="mx-2 text-secondary-200" size="1.25rem" />
						<span className="hidden md:block">Reference</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Sidebar;
