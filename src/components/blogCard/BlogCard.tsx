import React from 'react'
import './BlogCard.scss'

interface BlogCardProps {
  blog: {
    url: string
    title: string
    description: string
  }
  isDark: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isDark }) => {
  const openUrlInNewTab = (url: string, name: string): void => {
    if (!url) {
      // eslint-disable-next-line no-console
      console.log(`URL for ${name} not found`)
      return
    }
    const win = window.open(url, '_blank')
    win?.focus()
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openUrlInNewTab(blog.url, blog.title)}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          openUrlInNewTab(blog.url, blog.title)
        }
      }}
    >
      <div className={isDark ? 'blog-container dark-mode' : 'blog-container'}>
        <a className={isDark ? 'dark-mode blog-card blog-card-shadow' : 'blog-card'} href="#blog">
          <h3 className={isDark ? 'small-dark blog-title' : 'blog-title'}>{blog.title}</h3>
          <p className={isDark ? 'small-dark small' : 'small'}>{blog.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
