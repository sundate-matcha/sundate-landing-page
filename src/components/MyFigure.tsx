import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface IMyFigure {
  imgSource: string
  imgAlt: string
  className?: string
}

function MyFigure({ imgSource, imgAlt, className = '' }: IMyFigure) {
  return (
    <figure className={`m-0 ${className}`.trim()}>
      <Zoom canSwipeToUnzoom={false}>
        <img
          alt={imgAlt}
          src={imgSource}
          className={'block w-full h-full rounded-none'}
        />
      </Zoom>
    </figure>
  )
}

export default MyFigure
