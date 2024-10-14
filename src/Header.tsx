import { motion } from 'framer-motion'
import { User, Star, Trophy, Target, ChevronDown } from 'lucide-react'

interface HeaderProps {
  headerHeight: any;
  avatarSize: any;
  greetingScale: any;
  greetingOpacity: any;
  progressOpacity: any;
  boxesTranslateY: any;
  boxesOpacity: any;
  scrollIndicatorOpacity: any;
}

export const Header: React.FC<HeaderProps> = ({
  headerHeight,
  avatarSize,
  greetingScale,
  greetingOpacity,
  progressOpacity,
  boxesTranslateY,
  boxesOpacity,
  scrollIndicatorOpacity
}) => {
  
  return (
    <motion.header
      style={{ height: headerHeight }}
      className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ width: avatarSize, height: avatarSize }}
        className="rounded-full bg-white flex items-center justify-center text-brand-orange mb-4"
      >
        <User className="w-1/2 h-1/2" />
      </motion.div>

      <motion.div
        style={{ scale: greetingScale, opacity: greetingOpacity }}
        className="text-center mb-4"
      >
        <h1 className="text-2xl font-bold">Welcome back, John!</h1>
        <p className="text-lg">Ready to conquer your day?</p>
      </motion.div>

      <motion.div
        style={{ opacity: progressOpacity }}
        className="w-64 h-2 bg-white/30 rounded-full mb-6"
      >
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ width: '60%' }}
        />
      </motion.div>

      <motion.div
        style={{ translateY: boxesTranslateY, opacity: boxesOpacity }}
        className="flex space-x-4"
      >
        {[
          { icon: Star, label: 'Points', value: '2,500' },
          { icon: Trophy, label: 'Rank', value: '#42' },
          { icon: Target, label: 'Goals', value: '3/5' },
        ].map((box, index) => (
          <div key={index} className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <box.icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{box.label}</span>
            <span className="font-bold text-sm">{box.value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.header>
  )
}