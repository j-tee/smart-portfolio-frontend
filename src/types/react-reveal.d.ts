// src/types/react-reveal.d.ts
declare module 'react-reveal' {
  import * as React from 'react'

  export interface RevealProps {
    children?: React.ReactNode
    duration?: number
    delay?: number
    distance?: string
    left?: boolean
    right?: boolean
    top?: boolean
    bottom?: boolean
    opposite?: boolean
    cascade?: boolean
    count?: number
    forever?: boolean
    spy?: boolean
    when?: boolean
    collapse?: boolean
    [key: string]: any
  }

  export class Fade extends React.Component<RevealProps> {}
  export class Zoom extends React.Component<RevealProps> {}
  export class Slide extends React.Component<RevealProps> {}
  export class Bounce extends React.Component<RevealProps> {}
  export class Flip extends React.Component<RevealProps> {}
  export class Rotate extends React.Component<RevealProps> {}
  export class LightSpeed extends React.Component<RevealProps> {}
  export class Roll extends React.Component<RevealProps> {}
  export class Jump extends React.Component<RevealProps> {}
}
