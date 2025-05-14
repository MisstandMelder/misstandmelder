"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReactNode } from "react"

interface TabLayoutProps {
  chat: ReactNode
  form: ReactNode
  result: ReactNode
}

export function TabLayout({ chat, form, result }: TabLayoutProps) {
  return (
    <Tabs defaultValue="form" className="w-full">
      <TabsList className="grid w-full grid-cols-3 rounded-lg bg-muted p-1 mb-4">
        <TabsTrigger value="chat" className="rounded-md py-1.5 text-sm">
          Chat met Assistent
        </TabsTrigger>
        <TabsTrigger value="form" className="rounded-md py-1.5 text-sm">
          Formulier
        </TabsTrigger>
        <TabsTrigger value="result" className="rounded-md py-1.5 text-sm">
          Resultaat
        </TabsTrigger>
      </TabsList>
      <TabsContent value="chat" className="p-3 bg-white border rounded-lg shadow-sm">
        {chat}
      </TabsContent>
      <TabsContent value="form" className="p-3 bg-white border rounded-lg shadow-sm">
        {form}
      </TabsContent>
      <TabsContent value="result" className="p-3 bg-white border rounded-lg shadow-sm">
        {result}
      </TabsContent>
    </Tabs>
  )
}