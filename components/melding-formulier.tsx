"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Loader2, MapPin, Send, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Naam moet minimaal 2 karakters bevatten.",
  }),
  location: z.string().min(2, {
    message: "Locatie moet minimaal 2 karakters bevatten.",
  }),
  date: z.string().min(2, {
    message: "Datum moet minimaal 2 karakters bevatten.",
  }),
  category: z.string({
    required_error: "Selecteer een categorie.",
  }),
  types: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecteer minimaal één type misstand.",
  }),
  description: z.string().min(10, {
    message: "Beschrijving moet minimaal 10 karakters bevatten.",
  }),
  impact: z.string().min(10, {
    message: "Impact moet minimaal 10 karakters bevatten.",
  }),
})

const typeOptions = [
  { id: "fraude", label: "Fraude" },
  { id: "corruptie", label: "Corruptie" },
  { id: "discriminatie", label: "Discriminatie" },
  { id: "intimidatie", label: "Intimidatie" },
  { id: "diefstal", label: "Diefstal" },
  { id: "misbruik", label: "Misbruik" },
  { id: "nepotisme", label: "Nepotisme" },
  { id: "bedrog", label: "Bedrog" },
  { id: "wanbeheer", label: "Wanbeheer" },
  { id: "bureaucratie", label: "Bureaucratie" },
  { id: "slechtzorg", label: "Slechtzorg" },
  { id: "nalatigheid", label: "Nalatigheid" },
]

type MeldingFormulierProps = {
  onMeldingGenerated: (data: {
    location: string
    date: string
    description: string
    rating: number
    review: string
  }) => void
}

export function MeldingFormulier({ onMeldingGenerated }: MeldingFormulierProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rating, setRating] = useState(3) // Standaard 3 sterren

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      date: "",
      types: [],
      description: "",
      impact: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/generate-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: values.location,
          date: values.date,
          description: values.description,
          impact: values.impact,
          types: values.types,
          rating: rating,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate report")
      }

      const data = await response.json()

      onMeldingGenerated({
        location: values.location,
        date: values.date,
        description: values.description,
        rating: rating,
        review: data.text,
      })
    } catch (error) {
      console.error("Error generating report:", error)
      alert("Er is een fout opgetreden bij het genereren van de melding. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-card shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Maak een nieuwe melding</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Naam of pseudoniem</FormLabel>
                    <FormControl>
                      <Input placeholder="Bijv. Jan Jansen of Burger X" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categorie</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Kies een categorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="overheid">Overheid</SelectItem>
                        <SelectItem value="zorg">Zorg</SelectItem>
                        <SelectItem value="onderwijs">Onderwijs</SelectItem>
                        <SelectItem value="bedrijfsleven">Bedrijfsleven</SelectItem>
                        <SelectItem value="overig">Overig</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisatie of locatie</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Bijv. BTC Direct, Zaans Medisch Centrum, Gemeente Amsterdam"
                          {...field}
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormDescription>Naam van organisatie, instelling of locatie van de misstand</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datum</FormLabel>
                    <FormControl>
                      <Input placeholder="Bijv. 15 mei 2023" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="types"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Type misstand</FormLabel>
                    <FormDescription>Selecteer alle types die van toepassing zijn.</FormDescription>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {typeOptions.map((option) => (
                      <FormField
                        key={option.id}
                        control={form.control}
                        name="types"
                        render={({ field }) => {
                          return (
                            <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, option.id])
                                      : field.onChange(field.value?.filter((value) => value !== option.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{option.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschrijving</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Beschrijf wat er gebeurd is..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="impact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Impact</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Beschrijf de impact ervan..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sterrenbeoordeling */}
            <div className="space-y-3">
              <FormLabel className="text-base flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> Beoordeling
              </FormLabel>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    type="button"
                    variant={rating >= star ? "default" : "outline"}
                    size="icon"
                    onClick={() => setRating(star)}
                    className="h-10 w-10 rounded-full"
                  >
                    <Star className="h-5 w-5" fill={rating >= star ? "currentColor" : "none"} />
                    <span className="sr-only">
                      {star} ster{star > 1 ? "ren" : ""}
                    </span>
                  </Button>
                ))}
              </div>
              <FormDescription>Selecteer een beoordeling van 1 tot 5 sterren voor deze misstand</FormDescription>
            </div>

            <Button type="submit" className="rounded-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verzending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Verzend melding
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
