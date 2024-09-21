import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/events/:id',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/api/uploadthing'
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect()
});

export const config = {
    matcher: [
        // '/',
        // '/events/:id',
        // '/api/webhooks/clerk',
        // '/api/webhooks/stripe',
        // '/api/uploadthing',
         // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};