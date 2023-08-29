/* eslint-disable camelcase */
import { useState, useEffect } from 'react'

import { api } from '../services/api'
import { GitHubUserResponse, GitHubUser } from '../interfaces/gitHub'
import { Card } from './Card'

import arrowUpRightFromSquareIcon from '../assets/icons/arrow-up-right-from-square.svg'

export function Header() {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser>({} as GitHubUser)

  useEffect(() => {
    async function getGitHubUserData() {
      const {
        data: { avatar_url, name, bio, login, company, followers, html_url },
      } = await api.get<GitHubUserResponse>('users/mathwcruz')

      setGitHubUser({
        avatarUrl: avatar_url,
        name,
        bio,
        user: login,
        company,
        followers,
        profileUrl: html_url,
      })
    }

    getGitHubUserData()
  }, [])

  return (
    <header className="-m-16">
      <Card className="drop-shadow">
        <img src={gitHubUser.avatarUrl} alt="" />

        <section></section>

        <a
          href={gitHubUser.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 text-xs uppercase transition-colors ease-linear hover:opacity-80"
        >
          github
          <img src={arrowUpRightFromSquareIcon} alt="" className="w-3 h-3" />
        </a>
      </Card>
    </header>
  )
}
