import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player'
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
        const {title, content, video} = this.props.pageData;


        return (
            <section className="container-fluid template-single p-0">
                <Header/>
                <div>
                    <ReactPlayer url={video}
                                 config={{
                                     youtube: {
                                         playerVars: { showinfo: 0 }
                                     }
                                 }}
                                 playing
                                 volume="0.1"
                                 loop
                                 muted
                                 width="100%"
                                 height="100vh"
                    />
                </div>
                <div dangerouslySetInnerHTML={{__html: content}}/>
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