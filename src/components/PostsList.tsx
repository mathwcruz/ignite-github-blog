import { formatDistance } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useNavigate } from 'react-router-dom'

import { Post } from '../interfaces/post'
import { Card } from './Card'

interface PostsListProps {
  posts: Post[]
}

export function PostsList({ posts }: PostsListProps) {
  const navigate = useNavigate()

  function openPost(postId: number) {
    navigate(`/posts/${postId}`)
  }

  return (
    <ul className="grid grid-cols-2 items-center gap-8 mt-9 mb-[176px]">
      {posts?.map(({ id, title, body, createdAt }) => (
        <Card
          key={id}
          className="max-w-[416px] h-[260px] flex-col items-start cursor-pointer border-2 border-gray-800 hover:border-gray-400 hover:scale-105 transition-colors duration-300 ease-in-out"
          onClick={() => openPost(id)}
        >
          <div className="flex gap-1 items-start justify-between w-full mb-5">
            <h4 className="max-w-[260px] w-full text-left text-base text-gray-100">
              {title}
            </h4>
            <span className="text-right text-sm text-gray-300 mt-1">
              {formatDistance(new Date(createdAt), new Date(), {
                locale: enUS,
                addSuffix: true,
              })}
            </span>
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="w-[352px] prose prose-p:text-gray-200"
          >
            {`${body?.slice(0, 235)}...`}
          </ReactMarkdown>
        </Card>
      ))}
    </ul>
  )
}
