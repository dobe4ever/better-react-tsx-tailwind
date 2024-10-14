import React from 'react'

interface MainAreaProps {
  children: React.ReactNode;
}

export const MainArea: React.FC<MainAreaProps> = ({ children }) => {
  return (
    <main className="pt-[50vh] pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
  )
}