"use client"

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold">Browser Automation</p>
          <p className="text-xs text-muted-foreground">Clerk authentication is active for this project.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Show when="signed-out">
            <SignInButton>
              <Button variant="outline">Sign in</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="secondary">Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  )
}
