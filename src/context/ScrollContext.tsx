import { createContext, useRef, useContext } from 'react'

const ScrollContext = createContext<React.RefObject<HTMLDivElement> | null>(
  null,
)

export const ScrollProvider = ({ children }) => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    product: useRef<HTMLDivElement>(null),
    sustainability: useRef<HTMLDivElement>(null),
    history: useRef<HTMLDivElement>(null),
    future: useRef<HTMLDivElement>(null),
    campaing: useRef<HTMLDivElement>(null),
  }

  const scrollTo = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ScrollContext.Provider value={{ sections, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
