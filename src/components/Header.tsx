/* eslint-disable camelcase */
import { useState, useEffect } from 'react'

import { api } from '../services/api'
import { GitHubUserResponse, GitHubUser } from '../interfaces/gitHub'
import { Card } from './Card'
import { ProfileInfoItem } from './ProfileInfoItem'

import arrowUpRightFromSquareIcon from '../assets/icons/arrow-up-right-from-square.svg'
import githubBrandsIcon from '../assets/icons/github-brands.svg'
import buildingIcon from '../assets/icons/building.svg'
import userGroupIcon from '../assets/icons/user-group.svg'

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
    <header className="-mt-16">
      <Card className="w-[864px] h-[212px] drop-shadow flex flex-row gap-8">
        <img src={gitHubUser.avatarUrl} alt="" className="w-36 rounded-lg" />

        <section className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center justify-between gap-2 w-full">
            <h3 className="text-2xl text-gray-100 text-left">
              {gitHubUser.name}
            </h3>
            <a
              href={gitHubUser.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-[2px] text-blue-400 text-xs uppercase transition-colors ease-in-out hover:opacity-75"
            >
              github
              <img
                src={arrowUpRightFromSquareIcon}
                alt=""
                className="w-3 h-3"
              />
            </a>
          </div>
          <p className="max-w-[612px] w-full text-base leading-relaxed text-gray-200">
            {gitHubUser.bio}
          </p>
          <ol className="flex items-center gap-6 mt-4 w-full">
            <ProfileInfoItem>
              <img src={githubBrandsIcon} alt="" className="w-[18px]" />
              <span className="text-sm text-gray-150">{gitHubUser.user}</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <img src={buildingIcon} alt="" className="w-[18px]" />
              <span className="text-sm text-gray-150">
                {gitHubUser.company}
              </span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <img src={userGroupIcon} alt="" className="w-[18px]" />
              <span className="text-sm text-gray-150">
                {gitHubUser.followers} followers
              </span>
            </ProfileInfoItem>
          </ol>
        </section>
      </Card>
    </header>
  )
}
