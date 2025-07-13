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
