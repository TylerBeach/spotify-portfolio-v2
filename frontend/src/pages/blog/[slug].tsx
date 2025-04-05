// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '@/utils/posts'
import { format, parseISO } from 'date-fns'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs()
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug)
  return { props: { post } }
}

import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import { motion } from "framer-motion";
import Link from "next/link";
import MusicPlayer from "@/Components/MusicPlayer";



export default function BlogPost({ post }: { post: ReturnType<typeof getPostBySlug> }) {

  return (
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh]  w-[100%] max-w-[100%] md:pt-2 md:pl-2 overflow-x-hidden">
      <div className="flex flex-row w-full  overflow-x-hidden scroll-hidden gap-x-2 md:pr-0 rounded-md">
        
        {/* Navbar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
          className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px]"
        >
          <Navbar />
        </motion.div>

        {/* Page Content */}
        <motion.div
          className="h-fit bg-black w-full height-minus-musicPlayer overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
          }}
        >
          <div className="flex flex-col  w-full pt-16 md:pt-24 gap-y-2 px-2 card_background rounded-lg height-minus-musicPlayer overflow-y-auto overflow-x-hidden pb-[90px] md:pb-0">
            <TopNavButtons imageURL={null} title={null}/>
            <div className="flex flex-col px-2 rounded-lg gap-y-0 h-fit pt-4 text-white">
                <h1 className='text-5xl'>{post.title}</h1>
                <p className='text-lg SpotifyLightFont'>{format(parseISO(post.date), 'MMMM d, yyyy')}</p>
                {/* line to seperate  */}
                <div className="w-full h-[1px] bg-white opacity-20 my-2" />
                <div className="prose prose-invert max-w-none pt-0 overflow-auto blogContent">
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </div>
            </div>
          </div>
        </motion.div>
      <MusicPlayer />
      </div>
    </main>
  );
}
