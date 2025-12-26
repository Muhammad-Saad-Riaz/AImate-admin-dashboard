"use client";

import { motion } from "framer-motion";
import { SidebarTrigger } from "@/components/ui/sidebar";
import CommandMenu from "@/components/dashboard/command-menu";
import { ModeToggle } from "@/components/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User, Settings, LogOut, Search, User2 } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-4 flex items-center justify-between sticky top-0 bg-background z-10 border-accent border-b-2"
    >
      {/* Left */}
      <SidebarTrigger />

      {/* Right */}
      <div className="flex gap-3 items-center">

        {/* COMMAND MENU */}
        <CommandMenu/>

        <ModeToggle />

        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer"
            >
              <User2 className="bg-accent rounded-full"/>
              {/* <Avatar>
                <AvatarImage
                  src="https://github.com/user1.png"
                  className="bg-accent"
                />
                <AvatarFallback>User</AvatarFallback>
              </Avatar> */}
            </motion.div>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={4}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};

export default Navbar;
