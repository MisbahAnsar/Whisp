import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts: defineTable({
        audioStorageId: v.optional(v.id('_storage')),
        user: v.id('_users'),
        podcastTitle: v.string(),
        description: v.string(),
        audioUrl: v.optional(v.string()),
        imgUrl: v.optional(v.id('_storage')),
        author: v.string(),
        authorId: v.string(),
        authorImageUrl: v.string(),
        voicePrompt: v.string(),
        imagePrompt: v.string(),
        voiceType: v.string(),
        audioDuration: v.number(),
        views: v.number(),
    })
        .searchIndex('search_author', { searchField: 'author' })
        .searchIndex('search_title', { searchField: 'podcastTitle' })
        .searchIndex('search_body', { searchField: 'description' }),
    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    }), 
})