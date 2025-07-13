import { useState, useEffect, useContext } from 'react'
import './Blog.scss'
import { Fade } from 'react-awesome-reveal'
import BlogCard from '../../components/blogCard/BlogCard'
import { blogSection } from '../../portfolio'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'

const Blogs = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  interface MediumBlog {
    link: string
    title: string
    content: string
    [key: string]: unknown
  }
  const [mediumBlogs, setMediumBlogs] = useState<MediumBlog[] | 'Error'>([])

  const setMediumBlogsFunction = (array: MediumBlog[] | 'Error') => {
    setMediumBlogs(array)
  }
  // Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  type ExtractTextContent = (html: unknown) => string

  const extractTextContent: ExtractTextContent = (html: unknown): string => {
    return typeof html === 'string'
      ? html
          .split(/<\/p>/i)
          .map((part: string) => part.split(/<p[^>]*>/i).pop() as string)
          .filter((el: string) => el.trim().length > 0)
          .map((el: string) => el.replace(/<\/?[^>]+(>|$)/g, '').trim())
          .join(' ')
      : ''
  }
  useEffect(() => {
    if (blogSection.displayMediumBlogs === 'true') {
      const getProfileData = () => {
        fetch('/blogs.json')
          .then(result => {
            if (result.ok) {
              return result.json()
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items)
          })
          .catch(function (error) {
            // eslint-disable-next-line no-console
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            )
            setMediumBlogsFunction('Error')
            blogSection.displayMediumBlogs = 'false'
          })
        return undefined
      }
      getProfileData()
    }
  }, [])
  if (!blogSection.display) {
    return null
  }
  return (
    <Fade direction="up" duration={1000}>
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className={isDark ? 'dark-mode blog-subtitle' : 'subTitle blog-subtitle'}>
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.displayMediumBlogs !== 'true' || mediumBlogs === 'Error'
              ? blogSection.blogs.map(blog => {
                  return (
                    <BlogCard
                      key={blog.url}
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        title: blog.title,
                        description: blog.description,
                      }}
                    />
                  )
                })
              : mediumBlogs.map(blog => {
                  return (
                    <BlogCard
                      key={blog.link}
                      isDark={isDark}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content),
                      }}
                    />
                  )
                })}
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default Blogs
