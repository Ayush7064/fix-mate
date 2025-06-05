import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react';

function Navbar() {
  const [user, setUser] = useState(null)

  const toggleLogin = () => {
    if (user) setUser(null)
    else setUser({ name: 'John Doe' })
  }

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
       <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800">
    <Sparkles size={20} className="text-primary" />
    <span>FixMate</span>
  </Link>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={toggleLogin}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-outline btn-sm" onClick={toggleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
