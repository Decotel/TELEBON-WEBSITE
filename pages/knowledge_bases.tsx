import KnowledgeBase from '@/screens/baza/list/KnowledgeBase'
import { GetStaticProps } from 'next'
import { fetchPostsBaza } from '../src/lib/api'
import { BazaResponse } from '@/screens/baza/interfaces'

interface PostsPageProps {
  posts: BazaResponse[]
}

export default function PostsPage({ posts }: PostsPageProps) {
  return <KnowledgeBase posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPostsBaza()
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}