// pages/blog/index.tsx
import { GetStaticProps } from 'next'
import { getAllPosts } from '@/utils/posts'
import Navbar from '@/Components/Navbar'
import TopNavButtons from '@/Components/TopNavButtons'
import MusicPlayer from '@/Components/MusicPlayer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format, parseISO } from 'date-fns'


export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return { props: { posts } }
}

export default function Blog({ posts }: { posts: { slug: string, title: string, date: string, image: string }[] }) {
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
            <div className="flex flex-col px-2 rounded-lg gap-y-5 h-fit text-white pt-3 md:pt-0">
              <h1 className="text-4xl font-bold"> Welcome to The Frog Blog! </h1>
              <div className="w-full grid px-2 grid-cols-1 flex-wrap gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
                
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="">
                  <div className="rounded-lg p-4 hover:bg-white/10 transition h-72 gap-y-2 flex flex-col justify-between">
                    {post.image && (
                      <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-[180px] object-cover rounded-md"
                      />
                    )}
                    <h2 className="text-2xl">{post.title}</h2>
                    <p className="text-sm text-gray-400">{format(parseISO(post.date), 'MMMM d, yyyy')}</p>
                  </div>
                </Link>
              ))}
              </div>

            </div>
          </div>
        </motion.div>
        <MusicPlayer />
      </div>
    </main>
  )
}
