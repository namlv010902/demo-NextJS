import React from 'react';
import Link from 'next/link';
import { usePathname  } from 'next/navigation'
type MenuType = {
  name: string;
  path: string;
}
const NavBar: React.FC = () => {

  const pathName = usePathname()

  const menuColumns: MenuType[] = [
    {
      name: "Home",
      path: "/",

    },
    {
      name: "Products",
      path: "/products",

    },
    {
      name: "Category",
      path: "/category",

    },
    {
      name: "About",
      path: "/about",

    }
  ]

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          {menuColumns?.map(menuItem => {
            const pathNameExist = pathName.includes(`/${menuItem.path}`);
            // console.log(pathNameExist);
            return (
              (
                <li key={menuItem.name}>
                  <Link href={menuItem.path} className={menuItem.path == pathName || pathNameExist ? "text-green-300 hover:text-green-500" : "text-white hover:text-gray-300"}>
                    {menuItem.name}
                  </Link>
                </li>
              )
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
