import { useState } from 'react'
import { CopyrightIcon } from 'lucide-react'
import {
  FaFacebook,
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaPhone,
  FaLocationDot,
} from 'react-icons/fa6'
import { Separator } from '@/components/ui/separator.tsx'
import LocationModal from '@/components/Footer/components/LocationModal.tsx'
import DialModal from '@/components/Footer/components/DialModal.tsx'

interface FooterProps {
  isMenuVisible?: boolean
}

function Footer({ isMenuVisible = false }: FooterProps) {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [isDialModalOpen, setIsDialModalOpen] = useState(false)

  return (
    <footer
      id={'contact'}
      className={`md:px-10 px-4 py-4 text-center fixed bottom-0 left-0 w-full h-[7vh] z-50 flex flex-row justify-between items-center transition-colors duration-500 ${
        isMenuVisible
          ? 'bg-black text-foreground'
          : 'bg-background text-foreground'
      }`}
    >
      {/* Left section */}
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <div
          className="text-center cursor-pointer flex items-center gap-4 hover:opacity-80 transition-opacity"
          onClick={() => setIsLocationModalOpen(true)}
        >
          <FaLocationDot className="inline-block" size={30} />
          <p className="hidden md:block text-2xl">location</p>
        </div>

        <Separator orientation="vertical" className="h-10 bg-foreground" />
        <div
          className="text-center cursor-pointer flex items-center gap-4 hover:opacity-80 transition-opacity"
          onClick={() => setIsDialModalOpen(true)}
        >
          <FaPhone className="inline-block" size={30} />
          <p className="hidden md:block text-2xl">hotline</p>
        </div>
        <Separator orientation="vertical" className="h-10 bg-foreground hidden md:block" />
        <div className=" justify-center gap-4 hidden md:flex">
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
      </div>

      {/* Right section */}
      <div className="flex justify-center gap-4 md:hidden">
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
      <div className={'hidden md:block text-center text-2xl'}>
        <p>
          <CopyrightIcon className={'size-4 inline'} /> 2026 Sundate. All rights
          reserved.
        </p>
      </div>

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
      <DialModal
        isOpen={isDialModalOpen}
        onClose={() => setIsDialModalOpen(false)}
      />
    </footer>
  )
}

export default Footer
