import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: [
        '/',
        '/events/:id',
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
        '/api/uploadthing',
        '/((?!.+\\.[\\w]+$|_next).*)',
        '/(api|trpc)(.*)',
    ],
};