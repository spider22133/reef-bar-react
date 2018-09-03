import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSEOHomePage} from '../actions/index';

import Header from '../components/header';
import Footer from '../components/footer';

class FrontPage extends Component {

    componentWillMount() {
        this.props.fetchSEOHomePage();
    }

    componentDidUpdate() {
         document.title = `${this.props.pageData.title}`;
    }

    render() {

        const staticHomepageId = RT_API.staticHomepageId;
        const {title} = this.props.pageData;


        return (
        <section className="container-fluid template-single">
            <Header/>
                 <div>

                 </div>
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