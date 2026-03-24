import { CopyrightIcon } from 'lucide-react'
import {
  FaFacebook,
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaPhone,
  FaLocationDot,
} from 'react-icons/fa6'
import Logo from '@/assets/images/logo.png'
import LogoText from '@/assets/images/typeface.png'
function Footer() {
  const handleAddressClick = (address: string) => {
    const query = encodeURIComponent(address)
    const url = `https://maps.app.goo.gl/${query}`
    window.open(url, '_blank')
  }

  const branch1 = 'fEq35W3XfjHW683c9'

  return (
    <footer
      id={'contact'}
      className={'pt-6 pb-6 bg-background text-foreground text-center'}
    >
      <div
        className={
          'grid grid-cols-1 lg:grid-cols-2 mt-10 px-6 md:px-20 justify-around'
        }
      >
        <div>
          <a
            href={'#'}
            className={
              'cursor-pointer justify-center flex items-center gap-2 flex-row md:flex-col '
            }
          >
            <img src={Logo} alt="Sundate Logo" className={'md:h-20 h-14'} />

            <img
              src={LogoText}
              alt="Sundate Logo Text"
              className={'md:h-20 h-14'}
            />
          </a>
        </div>
        <div className="my-10 md:my-0 md:mb-10">
          <div
            className="text-center mb-5 cursor-pointer"
            onClick={() =>
              handleAddressClick('102B Tran Quoc Toan, Xuan Hoa Ward, HCM City')
            }
          ><FaLocationDot className="inline-block mr-2" />
            <span>102B Tran Quoc Toan, Xuan Hoa Ward, HCM City</span>
          </div>
          <div
            className="text-center mb-10 cursor-pointer"
            onClick={() => handleAddressClick(branch1)}
          >
            <FaLocationDot className="inline-block mr-2" />
            <span>41 khu pho My Tu 3, Tan Phong Ward, District 7, HCM City</span>
          </div>

          <div className="flex justify-center gap-10 mb-10">
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=61576618956568',
                  '_blank',
                )
              }
            >
              <FaFacebook size={30} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/sundate.matchashelter',
                  '_blank',
                )
              }
            >
              <FaInstagram size={30} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  'https://www.threads.com/@sundate.matchashelter',
                  '_blank',
                )
              }
            >
              <FaThreads size={30} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open('https://www.tiktok.com/@sundatematcha', '_blank')
              }
            >
              <FaTiktok size={30} />
            </div>
          </div>
          <div
            className="text-center mb-10 cursor-pointer"
            onClick={() => window.open('tel:02812345678', '_blank')}
          >
            <FaPhone className="inline-block mr-2" />
            <span>028 1234 5678</span>
          </div>
          <div className="text-center">MONDAY - SUNDAY: 08:30 - 22:30</div>
        </div>
      </div>
      <div className={'text-center text-sm'}>
        <p>
          <CopyrightIcon className={'size-4 inline'} /> 2026 Sundate. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
