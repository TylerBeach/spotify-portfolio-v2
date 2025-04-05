import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import { parse } from 'date-fns'

const blogDir = path.join(process.cwd(), 'src', 'blog')

export function getAllPosts() {
    const filenames = fs.readdirSync(blogDir)
  
    const posts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const slug = filename.replace(/\.md$/, '')
        const content = fs.readFileSync(path.join(blogDir, filename), 'utf8')
        const lines = content.split('\n')
  
        const title = lines[0]?.trim() || 'Untitled'
        const date = lines[1]?.trim() || ''
        const image = lines[2]?.trim() || ''
  
        return {
          slug,
          title,
          date,        
          image,
          timestamp: Date.parse(date) 
        }
      })
  
    posts.sort((a, b) => b.timestamp - a.timestamp) 
  
    return posts.map(({ timestamp, ...rest }) => rest)
  }
  

export function getAllSlugs() {
  return fs.readdirSync(blogDir)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const lines = fileContents.split('\n')
  const title = lines[0]?.trim() || 'Untitled'
  const date = lines[1]?.trim() || ''
  const image = lines[2]?.trim() || ''
  const contentMd = lines.slice(3).join('\n')
  const contentHtml = marked(contentMd)

  return {
    slug,
    title,
    date,
    image,
    contentHtml
  }
}
