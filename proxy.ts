import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = ["/sign-in", "/sign-up"];

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  const isPublic =
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up");

  if (!isPublic) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
