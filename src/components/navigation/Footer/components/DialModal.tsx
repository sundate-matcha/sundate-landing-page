import { FC } from 'react'
import { FaPhone } from 'react-icons/fa6'

interface DialModalProps {
  isOpen: boolean
  onClose: () => void
}

const HOTLINE_NUMBER = '0858817777'

const DialModal: FC<DialModalProps> = ({ isOpen, onClose }) => {
  const handleDial = () => {
    window.open(`tel:${HOTLINE_NUMBER}`, '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/55 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="w-full max-w-[360px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-2xl bg-background text-foreground hover:bg-foreground hover:text-background shadow-[0_8px_8px_rgba(0,0,0,0.45)] px-6 py-8">
            <h3 className="text-[62px] leading-none text-center">Hotline</h3>

            <button
              onClick={handleDial}
              className="mt-3 w-full flex items-center justify-center gap-2 text-[50px] leading-none"
              aria-label="Call hotline 0858817777"
            >
              <FaPhone className="text-[28px]" />
              <span>{HOTLINE_NUMBER}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DialModal
