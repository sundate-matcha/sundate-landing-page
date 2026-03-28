import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import BoxReveal from '@/components/magicui/box-reveal'

interface IMyFigure {
  imgSource: string
  imgAlt: string
  className?: string
}

function MyFigure({ imgSource, imgAlt, className = '' }: IMyFigure) {
  return (
    <figure className={`m-0 ${className}`.trim()}>
      <Zoom canSwipeToUnzoom={false}>
        <BoxReveal boxColor={'hsl(2, 69%, 30%)'} duration={0.4} width={'100%'}>
          <img
            alt={imgAlt}
            src={imgSource}
            className={'block w-full h-full rounded-none'}
          />
        </BoxReveal>
      </Zoom>
    </figure>
  )
}

export default MyFigure
