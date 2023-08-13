import Activity from "./Activity";
import './Home.css';
import MoreInfo from "./MoreInfo";

function Home() {

  
    return (
      <div className="">
        <div className="content">
         

          <Activity/>
          <MoreInfo/>
          <div className='creator'>Created by <span className='link'>AndileSouth</span> a front-end Developer using https://www.boredapi.com/ </div>
        </div>
      </div>
    );
  }
  
  export default Home;