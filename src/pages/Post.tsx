import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Post as PostType } from '../interfaces/post'
import allPosts from '../utils/data/posts.json'

export function Post() {
  const { postId } = useParams()

  const [post, setPost] = useState<PostType>({} as PostType)

  useEffect(() => {
    setPost(
      allPosts?.find(({ id }) => id === Number(postId)) || ({} as PostType),
    )
  }, [postId])

  return (
    <div className="max-w-[864px] flex items-center">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-gray-200">
        {post?.body}
      </ReactMarkdown>
    </div>
  )
}
