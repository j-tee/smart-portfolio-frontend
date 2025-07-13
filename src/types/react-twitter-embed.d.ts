// src/types/react-twitter-embed.d.ts
declare module 'react-twitter-embed' {
  import type * as React from 'react'

  export interface TwitterTimelineEmbedProps {
    sourceType: 'profile' | 'likes' | 'list' | 'collection' | 'url' | 'widget'
    screenName?: string
    options?: object
    onLoad?: () => void
    [key: string]: any
  }

  export const TwitterTimelineEmbed: React.FC<TwitterTimelineEmbedProps>
  export const TwitterTweetEmbed: React.FC<{ tweetId: string }>
  export const TwitterShareButton: React.FC<{
    url: string
    options?: object
  }>
}
