import React, {useState} from 'react'
import Step1Screen from './Step1Screen';
import Step2Screen from './Step2Screen';
import Step3Screen from './Step3Screen';
import Step4Screen from './Step4Screen';
const Home = () => {
    const [page, setPage] = useState(0);
    const PageTitles = ["Step1", "Step2", "Step3", "Step4"]
    const pageDisplay = () => {
      if(page === 0) {
        return <Step1Screen />
      } else if (page === 1) {
        return <Step2Screen />
      } else if (page === 2) {
        return <Step3Screen />
      } else {
        return <Step4Screen />
      }
    }
  return (
    <div>
        {pageDisplay()}
     <div>
      <button 
        onClick={() => {
            if(page === PageTitles.length -1 ) {
                setPage(0);
            } else {
                setPage((currPage => currPage +1))}}
            }
      >
        Create Workplace
      </button>
     </div>
    </div>
  )
}

export default Home