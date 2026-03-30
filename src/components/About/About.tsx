import ImgDining from '@/assets/images/chawan_photo.jpg'
import Marquee from '@/components/magicui/marquee'

function About() {
  const aboutPhotos = [
    {
      src: ImgDining,
      alt: 'Khong gian nha hang am cung voi den vang',
      objectPosition: 'bottom',
    },
  ]

  return (
    <section
      id={'aboutus'}
      className={
        'overflow-hidden bg-foreground flex flex-col items-center justify-center md:gap-20 h-screen'
      }
    >
      <div
        className={
          'flex flex-col gap-6 md:flex-row md:items-center md:justify-between mx-auto w-[min(1200px,92%)]'
        }
      >
        <div>
          <h2 className={'text-6xl tracking-tight text-black md:text-8xl'}>
            About Sundate
          </h2>
        </div>
        <div>
          <p className={'max-w-xl text-xl leading-7 text-black md:text-4xl'}>
            Sundate la khong gian am thuc va gap go, noi moi bua an duoc tao nen
            tu nguyen lieu tuoi, huong vi tron ven va su cham chut trong tung
            chi tiet. Chung toi tin rang am thuc ngon nhat khi duoc chia se cung
            nhau trong mot khong gian am cung, thoai mai va day nang luong tich
            cuc.
          </p>
        </div>
      </div>

      <Marquee pauseOnHover className={'mt-9 [--duration:10s]'}>
        {aboutPhotos.map((photo, index) => (
          <figure
            key={`${photo.alt}-${index}`}
            className={
              'h-[24vh] w-[66vw] overflow-hidden md:h-[360px] md:w-[35rem]'
            }
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={'h-full w-full object-cover '}
              style={{ objectPosition: photo.objectPosition }}
            />
          </figure>
        ))}
      </Marquee>
    </section>
  )
}

export default About
