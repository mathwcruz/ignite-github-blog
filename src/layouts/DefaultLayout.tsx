import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-screen h-[296px] overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/background-cover.png)' }}
      />
      <Outlet />
    </div>
  )
}
