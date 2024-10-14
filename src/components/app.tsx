'use client'

// App.tsx v3
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, MessageCircle, Plus, Sparkles, X, ChevronRight, Menu, Bell, Calendar, BarChart, Search, User } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export function App() {
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
    <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 min-h-screen w-full">

      <div 
        ref={headerRef}
        className="sticky z-10 top-0 transition-colors duration-300 ease-in-out"
        >

        {/* Fixed top bar */}
        <div className="flex justify-between items-center p-4 w-full"
        style={{ backgroundColor: `rgba(255, 255, 255, ${fadePercentage / 100})`, }}>

          <Menu className={`h-6 w-6 transition-colors duration-300 ease-out`} 
            style={{ color: `rgba(0, 0, 0, ${fadePercentage / 100})` }} />

          <div className="flex items-center space-x-4">
            <Bell className={`h-6 w-6 transition-colors duration-300 ease-out`} 
              style={{ color: `rgba(0, 0, 0, ${fadePercentage / 100})` }} />
            <User className={`h-6 w-6 transition-colors duration-300 ease-out`} 
              style={{ color: `rgba(0, 0, 0, ${fadePercentage / 100})` }} />
          </div>

        </div>

      </div>

      {/* Header content */}
      <div
        className="flex flex-col items-center justify-center px-4 py-12 -my-10 space-y-6 w-full"
        style={{ backgroundColor: `rgba(255, 255, 255, ${fadePercentage / 100})`, color: `rgba(0, 0, 0, ${1 - fadePercentage / 100})` }}
      >

        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">
            Hi Troy
          </h1>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-center">
          READY TO CRUSH SOME HABITS?
        </h1>

        <img
          src="https://randomuser.me/api/portraits/men/55.jpg"
          alt="avatar"
          className="w-[40%] h-[40%] rounded-full object-cover"
        />

        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="w-full pl-10 bg-white text-black" placeholder="Try 'Upcoming payments'" />
          </div>
        </div>

      </div>
      
      {/* Header content */}
      {/* <motion.div 
        className="box-border md:box-content w-full h-1/2 bg-red-500 overflow-hidden"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 0, y: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full min-h-screen-1/2 flex flex-col items-center justify-center relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/3 z-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          
          <div class="box-border md:box-content w-1/2 aspect-square overflow-hidden p-6 z-10">
          <motion.div>
            <img src="https://i.pravatar.cc/128" alt="Avatar" className="w-[40%] h-[40%] object-cover" />
          </motion.div>
          </div>
          
          <motion.h1 
            className="text-3xl rounded-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hey, {userName}!
          </motion.h1>

          <motion.p 
            className="mt-2 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Ready to crush some habits?
          </motion.p>

          <motion.div 
            className="mt-4 flex space-x-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <IconBadge icon={Sparkles} label="Streaks" value="7" />
            <IconBadge icon={Trophy} label="Last week" value="12" />
            <IconBadge icon={Zap} label="Power" value="9000+" />
          </motion.div>
        </div>
      </motion.div> */}
    

      {/* <ScrollArea className="flex flex-col h-screen text-white"> */}
        {/* Main Content */}
        <div className="flex-grow bg-white text-black rounded-t-3xl p-4 z-20">
          <div className="space-y-4 mt-6 ">

            {/* Optional widget*/}
            {isNotificationVisible && (
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-gray-800">A widget the user can close</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setIsNotificationVisible(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Upgrade before 11 Oct 2024 for 50% off</p>
                      <Button variant="outline" size="sm" className="mt-4 text-orange-600 rounded-full border-orange-600 hover:bg-orange-600 hover:text-white">
                        Read more
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Daily Summary Widget*/}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-800">Daily Summary</CardTitle>
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

            {/* Habits Widget*/}
            <Card className="mb-4 bg-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-gray-800">Habits</CardTitle>
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
                  <CardTitle className="text-gray-800">Todos</CardTitle>
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

            {/* Calendar Widget*/}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-gray-800">Calendar</CardTitle>
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
                  <CardTitle className="text-gray-800">Analytics</CardTitle>
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
      {/* </ScrollArea> */}
    </div>
  )
}