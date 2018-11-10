import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Menu from '../containers/parts/menu';
import Search from './search';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;

        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const classThree = collapsed ? 'hide' : 'show';

        return (
            <header className="navbar navbar-light position-fixed">
                <div className="navbar-brand"><Link to='/' dangerouslySetInnerHTML={{__html: RT_API.mainLogo}}/></div>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"/>*/}

                        <div id="nav-menu-wrap">
                            <div id="nav-menu" style={{transform: 'translate3d(0px, 0%, 0px)'}}>
                                <div id="nav-menu-dark">MENU</div>
                            </div>
                        </div>
                        <div id="nav-burger-line-container">
                            <div className="nav-burger-line-wrap">
                                <div className="nav-burger-line" style={{transform: 'translate3d(0%, 0px, 0px)'}}>
                                </div>
                            </div>
                            <div className="nav-burger-line-wrap">
                                <div className="nav-burger-line" style={{transform: 'translate3d(0%, 0px, 0px)'}}>
                                </div>
                            </div>
                            <div className="nav-burger-line-wrap">
                                <div className="nav-burger-line" style={{transform: 'translate3d(0%, 0px, 0px)'}}>
                                </div>
                            </div>
                            <div className="nav-burger-line-wrap">
                                <div className="nav-burger-line" style={{transform: 'translate3d(-100%, 0px, 0px)'}}>
                                </div>
                            </div>
                            <div className="nav-burger-line-wrap">
                                <div className="nav-burger-line" style={{transform: 'translate3d(100%, 0px, 0px)'}}>
                                </div>
                            </div>
                        </div>

                </button>
                <nav className={`main-menu ${classThree}`}>
                    <div className="container">
                        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarResponsive">
                            <Menu name="main_menu" anim={collapsed}/>
                        </div>
                    </div>
                </nav>
                {/*<Search searchTerm={this.props.searchTerm} isSearch={this.props.isSearch}/>*/}
            </ header >
        );
    }
}

module.exports = Header;
