import MainFooter from "../MainFooter/MainFooter"
import MainHeader from "../MainHeader"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-text transition-colors duration-300">
      <MainHeader/>
      <main className="flex-1">
        {children}
      </main>
      <MainFooter/>
    </div>
  )
}

export default MainLayout