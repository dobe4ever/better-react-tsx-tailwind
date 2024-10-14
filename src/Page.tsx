import { useState, useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { Header } from './Header'
import { MainArea } from './MainArea'

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  const headerHeight = useTransform(scrollY, [0, 200], ['50vh', '30vh'])
  const avatarSize = useTransform(scrollY, [0, 200], ['6rem', '4rem'])
  const greetingScale = useTransform(scrollY, [0, 200], [1, 0.8])
  const greetingOpacity = useTransform(scrollY, [0, 100], [1, 0.7])
  const progressOpacity = useTransform(scrollY, [0, 150], [1, 0.7])
  const boxesTranslateY = useTransform(scrollY, [0, 200], [0, -20])
  const boxesOpacity = useTransform(scrollY, [0, 200], [1, 0.7])
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-orange via-pink-500 to-purple-600 text-white">
      <Header
        headerHeight={headerHeight}
        avatarSize={avatarSize}
        greetingScale={greetingScale}
        greetingOpacity={greetingOpacity}
        progressOpacity={progressOpacity}
        boxesTranslateY={boxesTranslateY}
        boxesOpacity={boxesOpacity}
        scrollIndicatorOpacity={scrollIndicatorOpacity}
      />
      <MainArea>
        {children}
      </MainArea>
    </div>
  )
}