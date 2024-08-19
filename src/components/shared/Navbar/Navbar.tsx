import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import logo from "/logo.png";
import ict_logo from "/ict_logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex h-20 w-full shrink-0 justify-between items-center px-4 md:px-6 lg:px-8 mt-2 sticky z-50">
      {/* sidebar for small screen */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" className="flex items-center gap-4 group">
            <img src={ict_logo} className="w-20" />
            <img src={logo} className="w-10" />
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              onClick={closeSidebar}
            >
              প্রথমপাতা
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              অধিনস্ত দপ্তর
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              প্রকল্প-কর্মসূচি
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              আইন/নীতিমালা
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              ই-সেবা
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              গ্যালারী
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              যোগাযোগ/মতামত
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Navbar left side content */}
      <div className="hidden lg:flex px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={ict_logo} className="w-20" />
          <img src={logo} className="w-12" />
        </Link>
      </div>

      {/* Nav menus */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              প্রথমপাতা
            </Link>
          </NavigationMenuLink>

          {/* অধিনস্ত দপ্তর */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base z-50">
              অধিনস্ত দপ্তর
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2 z-50">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                    অধিনস্ত দপ্তর/ সংস্থার তালিকা
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* প্রকল্প/কর্মসূচি */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base z-50">
              প্রকল্প/কর্মসূচি
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2 z-50">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      চলমান প্রকল্প
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      ক্রয় পরিকল্পনা
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* আইন/নীতিমালা */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base z-50">
              আইন/নীতিমালা
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2 z-50">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      আইন ও বিধি
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      নীতিমালা
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              ই-সার্ভিস
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              গ্যালারী
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              যোগাযোগ/মতামত
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>

        {/* Right side menu items */}
        <div className="mx-4">
          <Link to={"/"}>
            <Button className="text-base relative flex items-center gap-2">
              English
            </Button>
          </Link>
        </div>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
