import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMenu} from '../../actions';

class Menu extends Component {
    componentDidMount() {
        this.props.actions.fetchMenu(this.props.name);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.name === nextProps.menu.name;
    }


    renderMenu(menu) {
        if (this.props.name === menu.name) {
            if (menu.name === "main_menu") {
                return menu.items.map(itemlevel1 => {
                    return (
                        <li key={itemlevel1.ID} className={`${itemlevel1.classes} nav-item`} id={itemlevel1.object_id}>
                            <Link className="nav-link" to={Menu.getRelativeUrl(itemlevel1.url)}>
                                <span className="menu-line"></span>
                                <span className="menu-txt">{itemlevel1.title}</span>
                            </Link>
                            {(itemlevel1.children !== 'undefined' && itemlevel1.children.length > 0) ?
                                (<ul>{itemlevel1.children.map(itemlevel2 => {
                                        return (
                                            <li key={itemlevel2.ID}>
                                                <Link className="nav-link level2" to={Menu.getRelativeUrl(itemlevel2.url)}>
                                                    <span className="menu-line"></span>
                                                    <span className="menu-txt">{itemlevel2.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    }
                                )}</ul>) : ''}
                        </li>
                    );
                });
            } else {
                return menu.items.map(item => {
                    return (
                        <li key={item.ID} className="nav-item" id={item.object_id}>
                            <Link className="nav-link" to={Menu.getRelativeUrl(item.url)}>{item.title}</Link>
                        </li>
                    );
                });
            }

        }
    }

    static getRelativeUrl(url) {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr(window.location.origin.length);
    }

    getClasses(location = '') {
        switch (location) {
            case 'main_menu':
                return 'navbar-nav navbar-right';
            case 'short':
                return 'nav justify-content-between';
            default:
                return '';
        }
    }

    render() {
        // console.log("MENU",this.props.name);
        return (
            <ul className={this.getClasses(this.props.menu.name)}>
                {this.renderMenu(this.props.menu)}
            </ul>
        );
    }
}

function mapStateToProps({menu}) {
    return {menu};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchMenu}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);