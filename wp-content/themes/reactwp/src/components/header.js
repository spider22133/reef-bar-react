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
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const classThree = collapsed ? '' : 'show';

        return (
            <header className="navbar navbar-light position-fixed">
                <div className="navbar-brand"><Link to='/' dangerouslySetInnerHTML={{__html: RT_API.mainLogo}}/></div>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <nav className={`main-menu ${classThree}`}>
                    <div className="container">
                        <div className={`${classOne} d-flex justify-content-center align-items-center`} id="navbarResponsive">
                            <Menu name="main_menu"/>
                        </div>
                    </div>
                </nav>
                {/*<Search searchTerm={this.props.searchTerm} isSearch={this.props.isSearch}/>*/}
            </ header >
        );
    }
}

module.exports = Header;
