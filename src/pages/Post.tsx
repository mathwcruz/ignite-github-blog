import { useState, useEffect } from 'react'
import { formatDistance } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Post as PostType } from '../interfaces/post'
import allPosts from '../utils/data/posts.json'
import { Card } from '../components/Card'
import { ProfileInfoItem } from '../components/ProfileInfoItem'

import chevronLeftIcon from '../assets/icons/chevron-left.svg'
import arrowUpRightFromSquareIcon from '../assets/icons/arrow-up-right-from-square.svg'
import githubBrandsIcon from '../assets/icons/github-brands.svg'
import calendarDayIcon from '../assets/icons/calendar-day.svg'
import commentIcon from '../assets/icons/comment.svg'

export function Post() {
  const { postId } = useParams()

  const [post, setPost] = useState<PostType>({} as PostType)

  useEffect(() => {
    setPost(
      allPosts?.find(({ id }) => id === Number(postId)) || ({} as PostType),
    )
  }, [postId])

  return (
    <div className="flex flex-col items-center gap-10 mb-[208px]">
      <Card className="w-[864px] h-[168px] drop-shadow flex flex-col gap-5 -mt-16">
        <div className="w-full flex items-start justify-between gap-2 uppercase text-xs text-blue-400">
          <a
            href="/"
            className="flex items-center justify-center gap-2 transition-colors ease-in-out hover:opacity-75"
          >
            <img src={chevronLeftIcon} alt="" className="w-[12px]" />
            Back
          </a>
          <a
            href={post?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 transition-colors ease-in-out hover:opacity-75"
          >
            See on github
            <img src={arrowUpRightFromSquareIcon} alt="" className="w-[12px]" />
          </a>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-left text-2xl text-gray-100">{post?.title}</h3>
          <ol className="flex items-center gap-8 w-full">
            <ProfileInfoItem>
              <img src={githubBrandsIcon} alt="" className="w-[18px]" />
              <span className="text-base text-gray-300">{post?.user}</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <img src={calendarDayIcon} alt="" className="w-[18px]" />
              <span className="text-base text-gray-300">
                {formatDistance(
                  new Date(post?.createdAt || '2023-09-07T14:47:00Z'),
                  new Date(),
                  {
                    locale: enUS,
                    addSuffix: true,
                  },
                )}
              </span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <img src={commentIcon} alt="" className="w-[18px]" />
              <span className="text-base text-gray-300">{`${post?.comments} comments`}</span>
            </ProfileInfoItem>
          </ol>
        </div>
      </Card>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="max-w-[800px] prose prose:text-gray-200 prose-headings:text-gray-100 prose-p:text-gray-200 prose-a:text-blue-400 prose-li:text-gray-200 prose-code:text-gray-200 prose-pre:text-gray-200"
      >
        {post?.body}
      </ReactMarkdown>
    </div>
  )
}
