import MainFooter from "../MainFooter/MainFooter"
import MainHeader from "../MainHeader"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader/>
      <main className="flex-1">
        {children}
      </main>
      <MainFooter/>
    </div>
  )
}

export default MainLayout