export async function getMediumArticles(username: string) {
    try {
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`)
      if (!response.ok) throw new Error("Failed to fetch articles")
      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching Medium articles:", error)
      return []
    }
  }
  
  