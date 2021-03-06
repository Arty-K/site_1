import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const text = {
    textRU:{
        title:'Обеззараживание ультрафиолетом',
        list:['Ультрафиолетовые установки Berson'],
        button:"Перейти к разделу"
    },
    textUA:{
        title:'Знезаражування ультрафіолетом',
        list:['Ультрафіолетові установки Berson'],
        button:'Перехід до розділу'
    }
};


export default class BersonMain extends Component {
    static propTypes = {
        lang:PropTypes.string,
        img:PropTypes.string
    };
    render() {
        const whatLanguage = this.props.lang ==='ru';
        return (
            <div className="row py-3 bord">
                <div className="col-lg-6">
                    <h4 className="text-left">
                        { whatLanguage ? text.textRU.title: text.textUA.title}
                    </h4>
                    {
                        whatLanguage ?
                            <p  className="font-weight-light">{text.textRU.list}</p>
                            :
                            <p  className="font-weight-light">{text.textUA.list}</p>
                    }
                    {/*<Link to='/Обеззараживание ультрафиолетом'>*/}
                        <button
                            type="button"
                            className="btn
                                   btn-outline-dark
                                   btn-sm
                                   btn-block">
                            { whatLanguage ? text.textRU.button : text.textUA.button}
                        </button>
                    {/*</Link>*/}
            </div>
                <div className="col-lg-3 d-none d-lg-block"></div>
                <div className="col-lg-3 d-none d-lg-block">
                    <img
                        className="card-img-top widt"
                        src={this.props.img}
                        alt="1"
                    />
                </div>
            </div>
        );
    }
}
