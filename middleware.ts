import {clerkMiddleware, authMiddleware} from "@clerk/nextjs/server";


// export default clerkMiddleware();

export default authMiddleware({
    publicRoutes: [
        "/",
        "/events/:id",
        "/api/webhooks/clerk",
        "/api/webhooks/stripe",
        "/api/uploadthing",
    ],
    ignoredRoutes: [
        "/api/webhooks/clerk",
        "/api/webhooks/stripe",
        "/api/uploadthing",
    ]
})

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
