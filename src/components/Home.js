import React from 'react'

// Import Css
import '../css/home.css'

// Import Image
import nodefluxLogo from '../img/home/nodeflux.svg'
import downLogo from '../img/home/down.svg'
import nLogo from '../img/home/n.svg'
import userLogo from '../img/home/user-silhouette.svg'
import iconlpr from '../img/home/icon-lpr.svg'
import busLogo from '../img/home/bus.svg'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                {/* HEADER */}
                <div className='header'>
                    <div className='brand'>
                        <img src={nodefluxLogo} className='nodeflux'/>
                    </div>
                    <div className='nav'>
                        <a className='About-Us navlink' href='#home'>About Us</a>
                        <a className='Product navlink' href='#product'>Product <img src={downLogo} className='down'/></a>
                        <a className='Newsroom navlink' href='#newsroom'>Newsroom <img src={downLogo} className='down' /></a>
                        <a className='Careers-Copy navlink' href='#careers'>Careers</a>
                        <a className='Contact-Us navlink' href='#contactus'>Contact Us</a>        
                    </div>
                </div>

                {/* CONTENT */}
                <div className='d-flex main-content'>
                    <div className='left-content'>
                        <div className='d-flex'>
                            <div className='face-regocnition'>
                                <div className='fr-title'>
                                    <span className='Face'>Face</span><span className='Recognition'>Recognition</span>
                                </div>
                                <div className='fr-point-title'>
                                    <span className='Total-Person'>Total Person</span><span className='Identified-Person'>Identified Person</span>
                                </div>
                                <div className='fr-value'>
                                    <span className='tp-value'>81032</span><span className='ip-value'>65112</span>
                                </div>
                            </div>
                            <div className='Oval fr-oval'></div>
                            <div className='Path-34'></div>
                        </div>
                        <div className='d-flex'>
                            <div className='face-detection'>
                                <div className='fd-title'>
                                    <spann className='Face'>Face</spann><span className='Detection'>Detection</span>
                                </div>
                                <div className='Mask d-flex'>
                                    <div className='each-fd-item'>
                                        <div className='Rectangle-19'>
                                            <img src={userLogo} className='user-silhouette'/>
                                        </div>
                                        <p className='Male'>Male</p>
                                        <p className='Age'>Age 17-20</p>
                                        <p className='Time'>Today.20.45</p>
                                    </div>
                                    <div className='each-fd-item'>
                                        <div className='Rectangle-19'>
                                            <img src={userLogo} className='user-silhouette'/>
                                        </div>
                                        <p className='Male'>Male</p>
                                        <p className='Age'>Age 17-20</p>
                                        <p className='Time'>Today.20.45</p>
                                    </div>
                                    <div className='each-fd-item'>
                                        <div className='Rectangle-19'>
                                            <img src={userLogo} className='user-silhouette'/>
                                        </div>
                                        <p className='Male'>Male</p>
                                        <p className='Age'>Age 17-20</p>
                                        <p className='Time'>Today.20.45</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Oval fd-oval'></div>
                            <div className='Path-fd'></div>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='globe'>
                            <img src={nLogo} className='nLogo'/>
                            <div className='Oval-Copy fr-oval-copy'></div>
                            <div className='Oval-Copy fd-oval-copy'></div>
                            <div className='Oval-Copy ts-oval-copy'></div>
                            <div className='Oval-Copy tsl-oval-copy'></div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='d-flex'>
                            <div className='Path-ts'></div>
                            <div className='Oval-1 ts-oval'></div>
                            <div className='traffic-surveillance'>
                                <div className='ts-title'>
                                    <span className='Traffic'>Traffic</span><span className='Surveilance'>Surveilance</span>
                                </div>
                                <div className='ts-point-title'>
                                    <span className='Total-Vehicle'>Total Vehicle</span><span className='Total-Lisence-Plate'>Total Lisence Plate</span>
                                </div>
                                <div className='ts-value'>
                                    <span className='tv-value'>5122</span><span className='tlp-value'>4232</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='Path-tsl'></div>
                            <div className='tsl-oval'>
                                <div className='Oval-1'></div>
                            </div>
                            <div className='traffic-surveillance2'>
                                <div>
                                    <span className='Traffic'>Traffic</span><span className='Surveillance'>Surveillance</span>
                                </div>
                                <div className='ts-content'>
                                    <div className='left-ts-content'>
                                        <div className='Rectangle-19'>
                                            <img src={busLogo} className='bus'/>
                                        </div>
                                    </div>
                                    <div className='center-ts-content'>
                                        <div className='Rectangle-20'>
                                            <img src={iconlpr} className='icon-lpr'/>
                                        </div>
                                    </div>
                                    <div className='right-ts-content'>
                                        <p className='code'>AB 123</p>
                                        <p className='Car'>Car</p>
                                        <p className='Time'>Today.20:45</p>
                                    </div>
                                </div>
                                <div className='ts-content'>
                                    <div className='left-ts-content'>
                                        <div className='Rectangle-19'>
                                            <img src={busLogo} className='bus'/>
                                        </div>
                                    </div>
                                    <div className='center-ts-content'>
                                        <div className='Rectangle-20'>
                                            <img src={iconlpr} className='icon-lpr'/>
                                        </div>
                                    </div>
                                    <div className='right-ts-content'>
                                        <p className='code'>CD 456</p>
                                        <p className='Car'>Car</p>
                                        <p className='Time'>Today.20:45</p>
                                    </div>
                                </div>
                                <div className='ts-content'>
                                    <div className='left-ts-content'>
                                        <div className='Rectangle-19'>
                                            <img src={busLogo} className='bus'/>
                                        </div>
                                    </div>
                                    <div className='center-ts-content'>
                                        <div className='Rectangle-20'>
                                            <img src={iconlpr} className='icon-lpr'/>
                                        </div>
                                    </div>
                                    <div className='right-ts-content'>
                                        <p className='code'>EF 789</p>
                                        <p className='Car'>Car</p>
                                        <p className='Time'>Today.20:45</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className='footer'>
                    <div className='Extending-Vision-Bey'>
                        Extending Vision Beyond Imagination
                    </div>
                    
                    <div className='button-place'>
                        <button className='btn btn-outline-dark button'><span className='Explore-More'>Explore More</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home