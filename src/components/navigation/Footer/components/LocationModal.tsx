import { FC } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

interface Branch {
  id: string
  address: string
  placeId: string
}

interface LocationModalProps {
  isOpen: boolean
  onClose: () => void
}

const LocationModal: FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const branches: Branch[] = [
    {
      id: '1',
      address: '41 khu pho My Tu 3, Tan Phong Ward, District 7, HCM City',
      placeId: 'fEq35W3XfjHW683c9',
    },
    {
      id: '2',
      address: '102B Tran Quoc Toan, Xuan Hoa Ward, HCM City',
      placeId: 'FdnNxJMoHUJi36Z76',
    },
  ]

  const handleOpenMap = (placeId: string) => {
    window.open(`https://maps.app.goo.gl/${placeId}`, '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full h-screen"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="text-white w-full overflow-hidden "
        //   onClick={(e) => e.stopPropagation()}
        >
          {/* Opening Hours Section */}
          <div className="bg-transparent px-6 py-6 justify-center items-center flex ">
            <div className="bg-background px-8 py-2 text-center rounded-2xl md:w-1/3 text-foreground shadow-[0_8px_8px_rgba(0,0,0,0.45)] ">
              <h3 className="text-6xl mb-2">Opening</h3>
              <p className="text-4xl mb-1">monday - sunday</p>
              <p className="text-4xl">08:30 - 22:30</p>
            </div>
          </div>

          {/* Locations Section */}
          <div className="bg-transparent md:px-6 md:py-6 fex flex flex-col gap-4 justify-center items-center">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="flex items-center gap-4 cursor-pointer hover:bg-foreground hover:text-background text-foreground transition-opacity bg-background p-4 rounded-2xl justify-center md:w-1/2 w-full shadow-[0_8px_8px_rgba(0,0,0,0.45)] "
                onClick={() => handleOpenMap(branch.placeId)}
              >
                <FaLocationDot className="text-xl mt-1" />
                <p className="md:text-4xl text-2xl text-left">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationModal
