"use client"

import { Button } from "@/components/ui/button"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { toast } from "sonner"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-3xl min-w-0 flex-col gap-6 text-sm leading-loose">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-background/80 p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Project ready!</h1>
              <p className="mt-1 text-muted-foreground">Sign in or sign up to start testing authentication.</p>
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

          <div>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button type="button" className="mt-2" onClick={() => toast("Button clicked!")}>Button</Button>
          </div>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
