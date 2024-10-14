// App.tsx v3
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Check, Sparkles, Trophy, Zap, X, ChevronRight, Menu, Bell, Calendar, BarChart, Search, User } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [isHabitsListOpen, setIsHabitsListOpen] = useState(false)
  const [isTodosListOpen, setIsTodosListOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false)
  const [isNotificationVisible, setIsNotificationVisible] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0
  const fadePercentage = Math.min((scrollPosition / headerHeight) * 100, 100)

  return (
    // Main
    <div className="bg-gradient-to-br from-white via-gray-200 to-gray-400 min-h-screen w-full">

      {/* Header content */}
      <div className="flex flex-col items-center justify-center space-y-6 w-full">

        <motion.div className="box-border md:box-content w-full overflow-hidden">

          <div className="w-full min-h-screen-1/2 flex flex-col items-center justify-center relative">
            {/* Orange cover */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />

            {/* Avatar */}
            <div className="h-full box-border md:box-content p-4 z-10">
              <motion.div 
                className="w-full h-full rounded-full shadow-lg border-4 border-orange-400 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                <img src="https://i.pravatar.cc/128" alt="Avatar" className="w-100 h-100 object-cover" />
              </motion.div>
            </div>

            <motion.h1 
              className="text-logo"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9 }}
            >
              Hey, Brotastic!
            </motion.h1>

            <motion.p 
              className="mt-2 text-lg text-gray-600"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7 }}
            >
              Ready to crush some habits?
            </motion.p>

            <motion.div 
              className="mt-4 flex items-center space-x-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div className="flex justify-between items-center space-x-4">

                {/* Sparkles */}
                <motion.div 
                  className="flex flex-col items-center justify-center px-4 py-12 -my-10 space-y-2 w-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-1 text-sm font-medium text-gray-700">Sparkles</span>
                  <span className="text-lg font-bold text-gray-800">7</span>
                </motion.div>

                {/* Trophy */}
                <motion.div 
                  className="flex flex-col items-center justify-center px-4 py-12 -my-10 space-y-2 w-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-1 text-sm font-medium text-gray-700">Coach</span>
                  <span className="text-lg font-bold text-gray-800">12</span>
                </motion.div>

                {/* Zap */}
                <motion.div 
                  className="flex flex-col items-center justify-center px-4 py-12 -my-10 space-y-2 w-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="mt-1 text-sm font-medium text-gray-700">Power</span>
                  <span className="text-lg font-bold text-gray-800">+9000</span>
                </motion.div>

              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* End of 'Header' */}
      {/* ____________________________ */}
      {/* Start of MainContent */}

      {/* Main Content wraper */}
        <div className="rounded-t-3xl bg-white box-sizing overflow-y-auto md:box-content space-y-2 mt-6 pt-10 p-2 flex flex-col">

          {/* Optional widget*/}
          {isNotificationVisible && (
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>A widget the user can close</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsNotificationVisible(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription className="text-gray-500">Upgrade before 11 Oct 2024 for 50% off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <Button>
                      Read more
                    </Button>
                  </div>
              </CardContent>
            </Card>
          )}

          {/* Habits Widget*/}
          <Card className="mb-4 bg-white">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Habits</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsHabitsListOpen(true)} className="text-orange-600 hover:text-orange-700">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
            <div className="flex justify-between items-center">
              <h3 className="text-xl"> Completed 3/12 </h3>
              <p className="text-xl font-bold">29%</p>
            </div>
            <Progress value={29} className="h-2 mt-4" />
            </CardContent>
          </Card>

          {/* Todos Widget*/}
          <Card className="mb-4 bg-white">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Todos</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsTodosListOpen(true)} className="text-orange-600 hover:text-orange-700">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
            <div className="flex justify-between items-center">
              <h3 className="text-xl"> Completed 8/10 </h3>
              <p className="text-xl font-bold">80%</p>
            </div>
            <Progress value={80} className="h-2 mt-4" />
            </CardContent>
          </Card>

          {/* Daily Summary Widget*/}
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle>Daily Summary</CardTitle>
              <CardDescription className="text-gray-500">AI-powered insights for your day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Completed tasks: 35</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Completed habits: 17</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">...</p>
              <p className="mt-2 text-sm font-medium text-gray-700">Tomorrow's focus:</p>
              <p className="text-sm text-gray-600">...</p>
            </CardContent>
          </Card>          

          {/* Calendar Widget*/}
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Calendar</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsCalendarOpen(true)} className="text-gray-600 hover:text-gray-700">
                  View Full <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                {/* Calendar content goes here */}
              </div>
            </CardContent>
          </Card>

          {/* Analytics Widget*/}
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Analytics</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsAnalyticsOpen(true)} className="text-gray-600 hover:text-gray-700">
                  View Details <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Productivity Score</p>
                  <p className="text-2xl font-bold text-orange-600">20%</p>
                </div>
                <div>
                  <p className="text-sm  font-medium text-gray-500">Completion Rate</p>
                  <p className="text-2xl font-bold text-green-600">76%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Top Habit</p>
                  <p className="text-lg font-semibold text-gray-700">Meditate</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Needs Improvement</p>
                  <p className="text-lg font-semibold text-gray-700">Exercise</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
  )
}