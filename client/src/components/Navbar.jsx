import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Book Services", href: "/book-services" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-white font-bold text-xl">Fx</span>
            </div>
            <span className="text-2xl font-extrabold text-gray-900">FixMate</span>
          </Link>

          {/* Center: Desktop Nav & Search */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Input
              type="text"
              placeholder="Search services..."
              className="w-72 text-base px-4 py-2"
            />
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="text-lg px-5 py-2">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg text-white px-6 py-2">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <div className="mt-8 space-y-8">

                  {/* Mobile Logo */}
                  <Link to="/" className="flex items-center space-x-3 px-2">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <span className="text-white font-bold text-xl">L</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Logo</span>
                  </Link>

                  {/* Mobile Nav */}
                  <div className="flex flex-col space-y-4 px-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-xl px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Input
                      type="text"
                      placeholder="Search services..."
                      className="mt-2 text-base px-4 py-2"
                    />
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 px-2">
                    <Link to="/login">
                      <Button variant="outline" className="w-full text-lg py-2">Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2">
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
