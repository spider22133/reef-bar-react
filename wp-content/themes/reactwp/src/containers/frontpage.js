import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchStaticHomePage} from '../actions/index';

import Header from '../components/header';
import Footer from '../components/footer';

class FrontPage extends Component {

    componentWillMount() {
        this.props.fetchStaticHomePage();
    }


    componentDidUpdate() {
        // document.title = `${this.props.static_page.id}`;
        console.log(this.props.id);
    }

    render() {
        const staticHomepageId = RT_API.staticHomepageId;

        return (
        <section className="container-fluid template-single">
            <Header/>
                 <span>

                 </span>
            <Footer/>
        </section>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {fetchStaticHomePage})(FrontPage)