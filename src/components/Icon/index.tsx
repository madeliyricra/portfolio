import icons from '../../assets/icons/icons.svg'
import { IIcon } from './props'

const Icon = (props : IIcon) => {
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