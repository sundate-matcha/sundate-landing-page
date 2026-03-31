import { useState } from 'react'
import workshopData from '../../data/workshopData.json'
import { WorkshopEvent } from './types/eventTypes'

function Workshop() {
  const [isEndedEventsOpen, setIsEndedEventsOpen] = useState(true)

  const allEvents: WorkshopEvent[] = workshopData.data
  const latestEvent = allEvents.find((event) => event.isAvailable === 'true')
  const endedEvents = allEvents.filter((event) => event.isAvailable === 'false')

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-foreground px-6 py-12">
      <div className="w-screen flex gap-12 lg:gap-20 items-start md:pt-20">
        {/* Left: Image */}
        <div className="hidden h-full md:flex flex-1 items-center justify-center">
          <div className="w-full aspect-video bg-gradient-to-b from-gray-300 to-gray-500 rounded-xl shadow-lg"></div>
        </div>

        {/* Right: Events Info */}
        <div className="no-scrollbar space-y-8 px-4 overflow-y-scroll flex flex-col justify-start h-[70vh]">
          {/* Latest Event */}
          {latestEvent && (
            <div>
              <h3 className="text-2xl font-serif italic text-background mb-4">
                Latest Event:
              </h3>
              <div className="bg-amber-50 rounded-lg p-6 flex gap-6 items-center">
                <div className="w-24 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="text-2xl font-serif italic text-red-800 mb-2">
                    {latestEvent.name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    From: {latestEvent.dateFrom} - {latestEvent.dateTo}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    Price: {latestEvent.price}
                    {latestEvent.unit && <span>{latestEvent.unit}</span>}
                  </p>
                </div>
                <button className="bg-red-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-800 transition-colors flex-shrink-0">
                  available
                </button>
              </div>
            </div>
          )}

          {/* Ended Events */}
          <div>
            <button
              onClick={() => setIsEndedEventsOpen(!isEndedEventsOpen)}
              className="flex items-center justify-between w-full mb-4 hover:opacity-75 transition-opacity"
            >
              <h3 className="text-2xl font-serif italic text-background">
                Ended Events:
              </h3>
              <span className="text-2xl text-background">
                {isEndedEventsOpen ? '−' : '+'}
              </span>
            </button>

            {isEndedEventsOpen && (
              <div className="space-y-4">
                {endedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-amber-50 rounded-lg p-6 flex gap-6 items-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-serif italic text-red-800 mb-2">
                        {event.name}
                      </h4>
                      <p className="text-sm text-gray-700">
                        From: {event.dateFrom} - {event.dateTo}
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        Price: {event.price}
                        {event.unit && <span>{event.unit}</span>}
                      </p>
                    </div>
                    <button className="bg-red-900 text-white px-4 py-2 rounded text-sm font-semibold cursor-not-allowed opacity-60 flex-shrink-0">
                      not available
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshop
