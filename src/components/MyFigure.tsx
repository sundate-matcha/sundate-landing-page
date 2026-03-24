import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import BoxReveal from '@/components/magicui/box-reveal'

interface IMyFigure {
  imgSource: string
  imgAlt: string
  imgCaption: string
}

function MyFigure({ imgSource, imgAlt, imgCaption }: IMyFigure) {
  return (
    <figure>
      <Zoom canSwipeToUnzoom={false}>
        <BoxReveal boxColor={'hsl(2, 69%, 30%)'} duration={0.4}>
          <img
            alt={imgAlt}
            src={imgSource}
            width="500"
            className={'rounded-lg'}
          />
        </BoxReveal>
      </Zoom>
      <figcaption
        className={
          'flex justify-center border border-solid border-primary shadow-[2px_3px_0_rgb(0,0,0)] text-black' +
          ' bg-background  text-foreground py-1 text-lg mt-5 rounded-lg pointer-events-none'
        }
      >
        <BoxReveal boxColor={'hsl(57.33, 100%, 91.18%)'} duration={0.4}>
          <p className={'text-center'}>{imgCaption}</p>
        </BoxReveal>
      </figcaption>
    </figure>
  )
}

export default MyFigure
