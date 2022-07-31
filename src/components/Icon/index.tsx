import icons from '../../assets/icons/icons.svg'

interface IconProps {
  name: string,
  className?: string,
  handleClick?: (target: any) => void,
}

const Icon = (props : IconProps) => {
  const { name, className, handleClick } = props

  return (
    <svg
      onClick={handleClick}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={`svg svg-${name} icon ${className || ''}`}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  )
}

export default Icon