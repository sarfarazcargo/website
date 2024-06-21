import React from 'react'
import "../../styles/styles.css"
import "../../styles/fontawesome-all.css"
import "../../styles/magnific-popup.css"
import "../../styles/swiper.css"
import Features1 from "../../assets/features-icon-1.svg"
import Features2 from "../../assets/features-icon-2.svg"
import Features3 from "../../assets/features-icon-3.svg"
import Features4 from "../../assets/features-icon-4.svg"
import Features5 from "../../assets/features-icon-5.svg"
import Features6 from "../../assets/features-icon-6.svg"

const ThirdComponent = () => {
  return (
    <div id="features" className="cards-1">
            <div className="container px-4 sm:px-8 xl:px-4">

                <div className="card">
                    <div className="card-image">
                        <img src={Features1} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Platform Integration</h5>
                        <p className="mb-4">You sales force can use the app on any smartphone platform without compatibility issues</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Features2} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Easy On Resources</h5>
                        <p className="mb-4">Works smoothly even on older generation hardware due to our optimization efforts</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Features3} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Great Performance</h5>
                        <p className="mb-4">Optimized code and innovative technology insure no delays and ultra-fast responsiveness</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Features4} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Multiple Languages</h5>
                        <p className="mb-4">Choose from one of the 40 languages that come pre-installed and start selling smarter</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Features5} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Free Updates</h5>
                        <p className="mb-4">Don't worry about future costs, pay once and receive all future updates at no extra cost</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Features6} alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Community Support</h5>
                        <p className="mb-4">Register the app and get acces to knowledge and ideas from the Pavo online community</p>
                    </div>
                </div>

            </div>
        </div> 
  )
}

export default ThirdComponent