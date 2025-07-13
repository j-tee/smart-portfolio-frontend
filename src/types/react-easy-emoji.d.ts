// src/types/react-easy-emoji.d.ts
declare module 'react-easy-emoji' {
  import type * as React from 'react'

  export default function emoji(
    text: string,
    options?: {
      baseUrl?: string
      ext?: string
      size?: number
      fallback?: boolean
    }
  ): React.ReactNode[]
}
