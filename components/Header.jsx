import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8  xl:py-12 text-white">
      <div className="container ms-auto flex justify-between items-center">
        {/* logo */}
        <Link href= "/">
          <h1 className="text-4xl font-semibold">
            Dela<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav and hire me button*/}
        <div className="hireMe items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="mobileNav">
          <MobileNav />
        </div>
      </div> 
    </header>
  )
}

export default Header
