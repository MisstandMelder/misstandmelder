"use client"

import React from "react"

type ThreeColumnLayoutProps = {
  chat: React.ReactNode
  form: React.ReactNode
  result: React.ReactNode
}

export const ThreeColumnLayout = ({ chat, form, result }: ThreeColumnLayoutProps) => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 w-full bg-white border rounded-lg shadow-sm p-6">
          {chat}
        </div>
        <div className="lg:w-1/3 w-full bg-white border rounded-lg shadow-sm p-6">
          {form}
        </div>
        <div className="lg:w-1/3 w-full bg-white border rounded-lg shadow-sm p-6">
          {result}
        </div>
      </div>
    </div>
  )
}
