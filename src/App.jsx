import './App.css'
import Comp from './components/Comp'
import imgMobile from './images/image-header-mobile.jpg'
import imgDesktop from './images/image-header-desktop.jpg'
import { useEffect, useState } from 'react'

function App({head, det}) {
  const comps = [
    {
      head: "10k+",
      det: "companies",
    },
    {
      head: "314",
      det: "templates",
    },
    {
      head: "12M+",
      det: "queries",
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleView = () => {
      setIsMobile(window.innerWidth < 780)
    };
    handleView();
    window.addEventListener("resize", handleView);

    return () => {
      window.removeEventListener("resize", handleView);
    }
  }, [])

  return (
    <>
      <div className="App">
        <div className="cardImg">
          <img src={isMobile ? imgMobile : imgDesktop} alt="" className="image" />
        </div>
        <div className="cardBody">
          <div className="titleDesc">
            <h1 className="cardHeader">
              Get <span className="headerSpan">insights</span> that help your business grow.
            </h1>
            <p className="description">
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="stats">
            {comps.map((item, key) => {
              return (
              <Comp key={key} head={item.head} det={item.det} />
              )
            })}
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </>
  )
}

export default App
