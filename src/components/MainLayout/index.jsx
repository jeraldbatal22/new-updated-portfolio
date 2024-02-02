import MainFooter from "../MainFooter/MainFooter"
import MainHeader from "../MainHeader"

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader/>
        <div className="mb-32">
          {children}
        </div>
      <MainFooter/>
    </div>
  )
}

export default MainLayout