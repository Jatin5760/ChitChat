import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createTask = mutation({
    args:{
        username: v.string(),
        fullname: v.string(),
        image: v.string(),
        bio: v.optional(v.string()),
        email: v.string(),
        clerkId: v.string(),
    },

    handler: async(ctx, args) =>{

        const existingUser = await ctx.db.query("users")
        .withIndex("by_clerk_id", (q)=> q.eq("clerkId", args.clerkId))
        .first()

        if(existingUser) return
        // Creating a user in DB
        await ctx.db.insert("users", {
            username:args.username,
            fullname:args.fullname,
            email:args.email,
            bio:args.bio,
            image: args.image,
            followers: 0,
            following: 0,
            posts: 0,
            clerkId: args.clerkId
        })
    }
});