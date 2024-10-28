import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="p-4 shadow-sm flex justify-between items-center px-5">
      <img src="/public/logo.svg" alt="Main logo" />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Header;
