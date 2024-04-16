import {publicProcedure, router} from "@/trpc/router";
import {postRouter} from "@/trpc/post-router";
import prisma from "@/lib/prisma";

export const appRouter = router({
  post: postRouter,
  getAll: publicProcedure.mutation(async () => {
    try{
      const post = await prisma.post.findMany()
      console.log("run mutation")
      return "hi"
    }catch (e){
      console.log(e)
      return e
    }
  }),
})

export type AppRouter = typeof appRouter;