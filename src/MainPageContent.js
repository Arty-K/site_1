import React, { Component } from 'react';
import Slideshow from './Slideshow';
import ParnterBlock from './PartnerBlock';
import OurWorksBlock from './OurWorksBlock';

class MainPageContent extends Component {

    render() {
        return (
            <div>
                <Slideshow lang={this.props.lang}/>
                <ParnterBlock lang={this.props.lang}/>
                <OurWorksBlock lang={this.props.lang}/>
            </div>

        );
    }
}

export default MainPageContent;

