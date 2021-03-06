import React, { useState, useEffect } from 'react'
 import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Join from './Join'
import Adds from './Adds'
import Live from './Live'
import ErrorPage from './ErrorPage'
import './Navbar.css'
import logo from '../images/logo.png';
import Home from './Home'
import Android from './Android'
import Facebook from './Facebook'
import Free from './Free'
import Google from './Google'
import New from './New'
import Linux from './Linux'
import Security from './Security'
import Sessions from './Sessions'
import Windows from './Windows'
import News from './News'
import '../App.css'
import useLocalStorage from 'use-local-storage';
function Navbar (props) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

     


    return(
        <div>
            <Router>
                <nav className='navbar'>
                
                    <div className='left'>
                        <a href="https://www.facebook.com/adil.marghady.16" target="_blanck"><i class="fab fa-facebook-square"></i></a>
                        
                        <a href='https://www.instagram.com/adil.dev1/' target="_blanck"><i class="fab fa-instagram-square"></i></a>
                        
                        <a href='https://www.youtube.com/c/th3pro' target="_blanck"><i class="fab fa-youtube-square"></i></a>

                        <a href="https://twitter.com/mr_Raghib" target="_blanck"><i class="fab fa-twitter-square"></i></a>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to='/join' className='nav-link' onClick={handleClick}>إلتحق بفريق العمل</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/live'  className='nav-link' onClick={handleClick} >البث المباشر مدونة المحترف</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/adds' className='nav-link' onClick={handleClick} >اعلن في موقع المحترف</Link>
                        </li>
                    </ul>

                    <div className='nav-icon' activeClassName='active' onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                 </div>

                </nav>
                <hr className='first-line'/>

                 
           <div>
            <img src={logo} alt='logo' className='imglogo'/>
            </div> 
            <br /> <br />
            
           
            
                <nav className='navbar2'>
                    <div className='left2'>
                        <div className='search'>
                    <i class="fas fa-search"></i>
                    </div>
                    <div className='dark'>
                    <i class="fas fa-moon"></i>
                    </div>
                    </div>

                    <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                        <li className='nav-item2'>
                            <Link to='/news' className='nav-link2' onClick={handleClick}> أخبار</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/free' className='nav-link2' onClick={handleClick}> المجانيات</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/new' className='nav-link2' onClick={handleClick}> حصريات</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/facebook' className='nav-link2' onClick={handleClick}> فيسبوك</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Google' className='nav-link2' onClick={handleClick}> جوجل</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Linux' className='nav-link2' onClick={handleClick}> لينكس</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Security' className='nav-link2' onClick={handleClick}> حماية</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Sessions' className='nav-link2' onClick={handleClick}> الحلقات</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Android' className='nav-link2' onClick={handleClick}> أندرويد</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/Windows' className='nav-link2' onClick={handleClick}> ويندوز</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/News' className='nav-link2' onClick={handleClick}> مقالات</Link>
                        </li>

                        <li className='nav-item2'>
                            <Link to='/'><i class="fa fa-home"></i> </Link>
                        </li>
                    </ul>

                    <div className='nav-icon2' activeClassName='active' onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                 </div>
                    
                </nav>
                <Routes>
                    <Route path='/join' element={<Join />} />
                    <Route path='/live' element={<Live />} />
                    <Route path='/adds' element={<Adds />} />
                    {/* <Route path='*' element={<ErrorPage />} /> */}
                </Routes>
                <Routes>
                    <Route path='/news' element={<News />} />
                    <Route path='/free' element={<Free />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/facebook' element={<Facebook />} />
                    <Route path='/Google' element={<Google />} />
                    <Route path='/Linux' element={<Linux />} />
                    <Route path='/Security' element={<Security />} />
                    <Route path='/Sessions' element={<Sessions />} />
                    <Route path='/Android' element={<Android />} /><Route path='/Windows' element={<Windows />} />
                    <Route path='/New' element={<New/>} />
                    <Route path='/' element={<Home />} />
                    {/* <Route path='*' element={<ErrorPage />} /> */}
                </Routes>


            </Router>

           
        </div>

        
    )
}

 
    
export default Navbar