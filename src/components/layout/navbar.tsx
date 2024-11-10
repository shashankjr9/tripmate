import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { useLocation, Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = React.useState(false);
  // @ts-expect-error
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      GetUserProfile(codeResponse);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const GetUserProfile = (tokenInfo: any) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acceess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link
        to={"/"}
        className="font-bold text-lg flex items-center w-[25%] justify-start"
      >
        <img src="./logo-icon.svg" alt="Main logo" className="w-9 h-9 mr-2" />
        TripMate
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link to={"/"} className="flex items-center">
                    <img
                      src="./logo-icon.svg"
                      alt="Main logo"
                      className="w-9 h-9 mr-2"
                    />
                    TripMate
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {isHomePage && (
                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link to={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ModeToggle />
              {user ? (
                <>
                  <Button asChild size="sm" variant="ghost">
                    <Link to={`/my-trips`}>View Trips</Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <Link to={`/create-trip`}>Add New Trip</Link>
                  </Button>
                  <Popover>
                    <PopoverTrigger>
                      <img
                        src={user.picture}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <p
                        onClick={() => {
                          googleLogout();
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                        className="cursor-pointer"
                      >
                        Logout
                      </p>
                    </PopoverContent>
                  </Popover>
                </>
              ) : (
                <Button
                  onClick={() => setOpenDialog(true)}
                  size="sm"
                  variant="ghost"
                >
                  Sign In
                </Button>
              )}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      {isHomePage && (
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link to={href} className="text-base px-2">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <div className="hidden lg:flex w-[25%] items-center justify-end">
        <ModeToggle />
        {user ? (
          <>
            <Button asChild size="sm" variant="ghost">
              <Link to={`/my-trips`}>View Trips</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link to={`/create-trip`}>Add New Trip</Link>
            </Button>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <p
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                  className="cursor-pointer"
                >
                  Logout
                </p>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Button onClick={() => setOpenDialog(true)} size="sm" variant="ghost">
            Sign In
          </Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button className="hidden">Close</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <img src="./logo-icon.svg" alt="logo" className="w-10 h-10" />
              <span className="text-xl font-bold mt-2 text-center">
                Sign in to continue
              </span>
            </DialogTitle>

            <DialogDescription>
              <span className="text-gray-500 mt-2 text-center">
                You need to sign in to generate a trip. If you don't have an
                account, you can sign up for free.
              </span>
            </DialogDescription>
          </DialogHeader>
          <Button
            disabled={loading}
            className="w-full mt-2 flex gap-2 items-center"
            onClick={() => login()}
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                <FcGoogle className="w-10 h-10" />
                Sign in with Google
              </>
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Navbar;
