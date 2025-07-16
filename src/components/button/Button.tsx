import './Button.scss'

// interface ButtonProps {
//   text: string
//   className?: string
//   href?: string
//   newTab?: boolean
// }
interface ButtonProps {
  text: string
  href?: string
  download?: string
  /* eslint-disable react/no-unused-prop-types */
  className?: string
  newTab?: boolean
  // newTab?: boolean
  // onClick?: () => void
  // id?: string
  // ariaLabel?: string
  // title?: string
  // type?: 'button' | 'submit' | 'reset'
  // disabled?: boolean
  // style?: React.CSSProperties
  // children?: React.ReactNode
  // 'data-testid'?: string
  // 'aria-haspopup'?: boolean
  // 'aria-expanded'?: boolean
  // 'aria-controls'?: string
  // 'aria-label'?: string
  // 'aria-describedby'?: string
  // 'aria-pressed'?: boolean
  // 'aria-selected'?: boolean
  // 'aria-labelledby'?: string
  // 'aria-hidden'?: boolean
  // 'aria-live'?: 'off' | 'polite' | 'assertive'
  // 'aria-atomic'?: boolean
  // 'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all'
  // 'aria-orientation'?: 'horizontal' | 'vertical'
  // 'aria-activedescendant'?: string
  // 'aria-flowto'?: string
  // 'aria-roledescription'?: string
  // 'aria-keyshortcuts'?: string
  // 'aria-details'?: string
  // 'aria-invalid'?: boolean | 'grammar' | 'spelling'
  // 'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  // 'aria-placeholder'?: string
  // 'aria-required'?: boolean
  // 'aria-valuemax'?: number
  // 'aria-valuemin'?: number
}

const Button = ({ text, href, download }: ButtonProps) => (
  <a
    className="main-button"
    href={href}
    download={download}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
  >
    {text}
  </a>
)
export default Button
