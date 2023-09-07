/* eslint-disable camelcase */
import { useState, useCallback, ChangeEvent } from 'react'

import { Post } from '../interfaces/post'
import allPosts from '../utils/data/posts.json'
import { Header } from '../components/Header'
import { PostsList } from '../components/PostsList'

import emptyData from '../assets/empty-data.svg'

export function Posts() {
  const [searchContent, setSearchContent] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>(allPosts)

  const handleSearchForContent = useCallback((searchContent: string) => {
    const postsFiltered = allPosts?.filter(({ title, body }) => {
      if (title?.includes(searchContent)) {
        return true
      }

      if (body?.includes(searchContent)) {
        return true
      }

      return false
    })

    setPosts(postsFiltered)
  }, [])

  return (
    <main className="flex flex-col gap-28 mb-8">
      <Header />

      <div className="mt-6 max-w-[852px] w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-between gap-1">
          <h5 className="text-left text-lg text-gray-150">Posts</h5>
          <span className="text-right text-sm text-gray-300">
            {posts?.length} posts
          </span>
        </div>

        <input
          type="text"
          placeholder="Search content"
          className="w-full h-[50px] rounded-md bg-gray-900 text-base text-gray-200 px-4 py-3 border border-gray-500 placeholder:text-gray-400 focus:border-blue-400 outline-none transition-all ease-linear"
          value={searchContent}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const searchContent: string = event.target.value.trim()

            setSearchContent(searchContent)
            handleSearchForContent(searchContent)
          }}
        />

        {posts?.length > 0 ? (
          <PostsList posts={posts} />
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center mt-10">
            <img src={emptyData} alt="" className="self-center w-32" />
            There are no posts
          </div>
        )}
      </div>
    </main>
  )
}
