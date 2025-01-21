"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { getMediumArticles } from "@/lib/medium"

interface Article {
  title: string
  link: string
  pubDate: string
  thumbnail: string
  description: string
}

export function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getMediumArticles("gautammanak1")
        setArticles(data)
      } catch (err) {
        setError("Failed to load articles")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 ">
      {articles.map((article, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {article.title}
              </a>
            </CardTitle>
            <CardDescription>{new Date(article.pubDate).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            {article.thumbnail && (
              <img
                src={article.thumbnail || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <p className="text-sm text-muted-foreground">
              {article.description.replace(/<[^>]*>/g, "").slice(0, 150)}...
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

