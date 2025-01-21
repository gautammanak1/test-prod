import { getAllArticles } from '@/lib/articles'
import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { type ExternalArticle, type ArticleType } from '@/lib/articles'

function Article({ article }: { article: ArticleType }) {
  const isExternal = 'url' in article

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={isExternal ? article.url : `/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{isExternal ? 'Read on Medium' : 'Read article'}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product creator, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  // Add Medium articles
  const mediumArticles: ExternalArticle[] = [
    {
      title: '10 Must-Have VSCode Extensions for Web Development',
      description:
        'Visual Studio Code is one of the most widely-used source code editors out there, with over 136k stars on GitHub. Its popularity comes about due to its lightness, flexibility, open-source nature, simplicity, and extensibility.',
      date: '2024-01-15',
      url: 'https://medium.com/@gautammanak1/10-must-have-vscode-extensions-for-web-development-44b0d129ae56',
    },
    {
      title: '🙌 7 Tips to Build Your GitHub Profile Like a PRO 🚀',
      description:
        'Here’s an example of my GitHub Profile. Let’s dive into how you can get your profile looking just as good in the next 10 minutes.',
      date: '2024-01-15',
      url: 'https://medium.com/@gautammanak1/7-tips-to-build-your-github-profile-like-a-pro-75b648f24f55',
    },
  ]

  const allArticles: ArticleType[] = [...mediumArticles, ...articles]

  return (
    <SimpleLayout
      title="Crafting Clear and Compelling Technical Stories"
      intro="All of my long-form thoughts on programming, leadership, product creator, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {allArticles.map((article) => (
            <Article
              key={'slug' in article ? article.slug : article.url}
              article={article}
            />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
