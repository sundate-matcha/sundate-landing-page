import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface IMyFigure {
  imgSource: string
  className?: string
}

function MyFigure({ imgSource, className = '' }: IMyFigure) {
  return (
    <figure className={`m-0 ${className}`.trim()}>
      <Zoom canSwipeToUnzoom={false}>
        <img src={imgSource} className={'block w-full h-full rounded-none'} />
      </Zoom>
    </figure>
  )
}

export default MyFigure
