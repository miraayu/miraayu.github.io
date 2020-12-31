import React from 'react';
import './porto.css';
import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom';

import CardArt from './art';
import CardMotion from './motion';
import CardLogo from './logo';
import CardPoster from './poster';
import CardBrand from './brand';
import CardUI from './ui';
import CardDataVizST from './datavizs';
import CardDataVizC from './datavizc';

export default function Porto(){
    return(
        <Router>
        <div className='App-header-porto'>
            <div className='sideleft'>
            {/* Desk */}
                <span className='title2'>a little<br/>explanation.</span>
                <div className='box-desc'>
                    <Switch>
                        <Route path='/porto' component={Opening} />
                        <Route exact path='/art' component={Art}/>
                        <Route path='/logo' component={Logo}/>
                        <Route path='/poster' component={Poster} />
                        <Route path='/brand' component={Brand} />
                        <Route path='/ui' component={UI} />
                        <Route path='/dataviz' component={DataViz} />
                        <Route path='/motion' component={Motion} />
                    </Switch>
                </div>
                <span className='title2'>navigation</span>
                <div className='box-link'>
                    <Link to='/art' className='link-porto'>
                        <a>Art Work</a>
                    </Link>
                    <Link to='/logo' className='link-porto'>
                        <a>Logo Design</a>
                    </Link>
                    <Link to='/poster' className='link-porto'>
                        <a>Poster</a>
                    </Link>
                    <Link to='/brand' className='link-porto'>
                        <a>Brand Design</a>
                    </Link>
                    <Link to='/ui' className='link-porto'>
                        <a>UI Design</a>
                    </Link>
                    <Link to='/dataviz' className='link-porto'>
                        <a>Data Visualization</a>
                    </Link>
                    <Link to='/motion' className='link-porto'>
                        <a>Motion Graphic</a>
                    </Link>

                </div>
            {/* Menu */}
            </div>
            <div className='sideright'>
                <span className='title'> Portofolio</span>
            {/* viewbox yg bisa scroll*/}
                <div className='boxcarousel'>
                    <Switch>
                        <Route path='/art'>
                            <CardArt />
                        </Route>
                        <Route path='/logo'>
                            <CardLogo />
                        </Route>
                        <Route path='/poster'>
                            <CardPoster />
                        </Route>
                        <Route path='/brand'>
                            <CardBrand />
                        </Route>
                        <Route path='/ui'>
                            <CardUI />
                        </Route>
                        <Route path='/dataviz/chart'>
                            <CardDataVizC />
                        </Route>
                        <Route path='/dataviz/storytelling'>
                            <CardDataVizST />
                        </Route>
                        <Route path='/motion'>
                            <CardMotion />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
        </Router>
    );
  }

function Opening(){
    return(
        <a className='text-desc'>Hi dear! In here, you gonna see some of my works. Please use the navigation menu below.<br/>Hope you like it!</a>
    )
}

  function Art(){
    return(
        <a className='text-desc'>These are some of my art works. Mostly commissioned for souvenir, memento, or applied to clothes. I did vector art, WPAP, and Photoshop edit such as Double Exposure.</a>
    )
}

function Logo(){
      return(
        <a className='text-desc'>I did several projects designing logos for various purposes. Starting from brand logos, streamers, events, and also other businesses.</a>
      )
  }

function Poster() {
    return(
        <a className='text-desc'>I work on several posters for various purposes such as infographics, advertisements, campaigns and events. I usually make materials for making posters myself, but in some cases when the client has stock images, I just edit and combine them with my design.</a>
    )
    
}
function Brand() {
    return(
        <a className='text-desc'>I have worked on marketing materials several times, from campus events, online clothing shops, to fanclubs. Branding is very important to promote our products.</a>
    )
    
}

function DataViz() {
    return(
        <>
        <a className='text-desc'>I've made some data visualization during my collage but sadly I can't show it here because of the publication's strict rules.
        So, for my portofolio I made 2 kinds of Data Visualization, a chart data visualization and a story telling.</a>
        <Link to='/dataviz/chart' className='link-porto-viz'>Chart</Link>
        <Link to='/dataviz/storytelling' className='link-porto-viz'>StoryTelling</Link>
        </>
    )
    
}

function UI() {
    return(
        <>
        <a className='text-desc'>I created UI designs for several applications. Here I will present LiveNOW and SharingCaring. I made this prototype with Figma.
         <br/>For better view, please click on projects's name below the prototype.
         </a>
         <br/>
         <a className='text-desc1'>And Of course, My portofolio website is actualy my portofolio too. I made it using React and CSS.</a>
         </>
    )
    
}

function Motion(){
    return(
        <a className='text-desc'>I made this video to apply on intern recruitment by CresentLab Surabaya,
            <br/>
            using Adobe Illustrator CS6 and After Effect CS6.
            <br/>
            This video is a promotional video kind that inspired by delivery services that play an important role during a pandemic.
        </a>
    )
}