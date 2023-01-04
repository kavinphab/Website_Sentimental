import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function NavBar() {
  return (
      <nav className="nav bg-orange-400 flex items-center justify-between text-white h-16">
          <Link to="/" className="site-title ml-8">
            Cutie Sentimental
          </Link>
          <ul className="flex items-stretch">
            <li className="mr-20 hover:bg-slate-500 pt-3 pb-3 pl-3 pr-3">
              <CustomLink to="/Home">Home</CustomLink>
            </li>
            <li className="mr-8  hover:bg-slate-500 pt-3 pb-3 pl-3 pr-3">
              <CustomLink to="/About Us">About Us</CustomLink>
            </li>
          </ul>
      </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end : true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    
  )
}
