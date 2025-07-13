import type { KeyboardEvent } from 'react'

interface AchievementCardFooter {
  name: string
  url?: string | URL
}

interface AchievementCardProps {
  cardInfo: {
    image: string
    imageAlt?: string
    title: string
    description: string
    footer: AchievementCardFooter[]
  }
  isDark: boolean
}

// Function component declaration instead of arrow function
const AchievementCard = ({ cardInfo, isDark }: AchievementCardProps) => {
  const openUrlInNewTab = (url?: string | URL) => {
    if (!url) return
    const win = window.open(url.toString(), '_blank')
    if (win) win.focus()
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLSpanElement>, url?: string | URL) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openUrlInNewTab(url)
    }
  }

  return (
    <div className={isDark ? 'dark-mode certificate-card' : 'certificate-card'}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || 'Card Thumbnail'}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? 'dark-mode card-title' : 'card-title'}>{cardInfo.title}</h5>
        <p className={isDark ? 'dark-mode card-subtitle' : 'card-subtitle'}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map(({ url, name }) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={name}
            role="button"
            tabIndex={0}
            className={isDark ? 'dark-mode certificate-tag' : 'certificate-tag'}
            onClick={() => openUrlInNewTab(url)}
            onKeyDown={e => handleKeyPress(e, url)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AchievementCard
