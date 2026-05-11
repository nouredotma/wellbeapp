import OwnerHeader from "./Header"
import { SideBar } from "./SideBar"

const OwnerLayout = ({ children }) => {
  return (
    <div className="font-[tomato]">
      <OwnerHeader />
      <div className="flex flex-1 mt-16">
        <SideBar />

        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default OwnerLayout

