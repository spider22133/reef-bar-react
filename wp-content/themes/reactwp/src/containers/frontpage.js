import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player'
import WaterWave from 'react-water-wave';
import {Link} from 'react-router-dom';
import {fetchSEOHomePage} from '../actions/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Menu from '../containers/parts/menu';
import Header from '../components/header';
import Footer from '../components/footer';

class FrontPage extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.enterPoint = this.enterPoint.bind(this);
    //     this.state = {
    //         style: {
    //             height: 0,
    //             width: 0
    //         }
    //     };
    // }
    //
    // enterPoint(event) {
    //
    // }

    componentWillMount() {
        this.props.fetchSEOHomePage();
    }

    componentDidUpdate() {
        document.title = `${this.props.pageData.title}`;
    }

    render() {

        const staticHomepageId = RT_API.staticHomepageId;
        const {title, content, video, svg} = this.props.pageData;

        return (
            <section className="container-fluid template-single p-0">
                <Header/>
                <div className="hero_container">

                    <div className="hero_content">
                        <WaterWave
                            style={{width: '100%', height: '100%', backgroundSize: 'contain', backgroundPosition: 'top'}}
                            imageUrl='/wp-content/uploads/2018/10/aqua.png'
                            perturbance={0.02}
                            resolution={512} >
                        </WaterWave>
                    </div>
                    <div className="gradient"/>
                    <nav className="hero_menu">
                        <Menu name="short"/>
                    </nav>
                    <div className="fittobox">
                        <ReactPlayer url={video}
                                     config={{
                                         youtube: {
                                             playerVars: {showinfo: 0}
                                         }
                                     }}
                                     playing
                                     volume={0.1}
                                     loop
                                     muted
                                     width="100%"
                                     height="100%"
                        />
                    </div>

                </div>

                <section className="main_info full_height d-flex p-5">
                    <div className="container-fluid d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <h2 className="h2">About us</h2>
                                <div dangerouslySetInnerHTML={{__html: content}}/>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="insta d-flex justify-content-center">
                                    <div className="insta_circle d-flex align-self-center">
                                        <img className="insta_img_reveal" src="/wp-content/uploads/2018/11/on-hover.png" alt=""/>
                                        <div className="insta_img_over"/>
                                        <div className="insta_inner align-self-center">
                                            <div className="h4 text-center">OUR INSTAGRAM</div>
                                            <div className="text-center"><img src="/wp-content/uploads/2018/09/insta-icon.png" alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <h2 className="h2">Contacts</h2>
                                <div className="h4">WE ARE AT YOUR COMPLETE DISPOSAL FOR
                                    ANY QUESTIONS
                                </div>
                                <div className="socials d-flex justify-content-start pt-3">
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x"/></Link>
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></Link>
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'google-plus-g']} size="2x"/></Link>
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></Link>
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'pinterest-p']} size="2x"/></Link>
                                    <Link className="" to=""><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/></Link>
                                </div>
                                <div className="contact_details pt-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="mb-2">OFFICE</h4>
                                            <p>355 S End Ave, #29G, New York, NY 10280</p>
                                        </div>
                                        <div className="col-12">
                                            <h4 className="mb-2">WAREHOUSE</h4>
                                            <p>15 Willet St, Unit #2, Bloomfield, NJ 07003</p>
                                        </div>
                                    </div>
                                    <div className="row pt-5">
                                        <div className="col-6">
                                            <h4 className="mb-2">PHONE</h4>
                                            <p>212 692-7266</p>
                                        </div>
                                        <div className="col-6">
                                            <h4 className="mb-2">EMAIL</h4>
                                            <p>david@reef-bar.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageData: state.static_page
    };
}

export default connect(mapStateToProps, {fetchSEOHomePage})(FrontPage)