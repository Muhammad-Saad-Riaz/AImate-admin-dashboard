"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Calculator,
  Calendar,
  CreditCard,
  LayoutDashboard,
  Settings,
  Smile,
  User,
  Zap,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  // 1. Listen for the keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // 2. Navigation helper
  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <>
      {/* Visual hint for the user (can be placed in a Search bar) */}
      <button 
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground border px-3 py-1.5 rounded-md hover:bg-accent transition-colors w-60 justify-between"
      >
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard Overview</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/users"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Manage Users</span>
            </CommandItem>
            
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Others">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/usage"))}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Usage Metrics</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/billing"))}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing & Subscription</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/settings"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Platform Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}