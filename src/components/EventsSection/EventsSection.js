import React from "react";
import { useState } from "react";
import './EventsSection.css';
import { eventList } from "../../shared/constants";
import ArrowButton from "../ArrowButton/ArrowButton";

const EventsSection = () => {
    const [page, setPage] = useState(0);

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <>
            <div className="events-section">
                <div className="main-content-container">
                    <div className="section-head">
                        <h1>СЪБИТИЯ</h1>
                        <button className="show-all">всички събития</button>
                    </div>
                    <div className="events-section-wrapper">
                        <div className={`events-section-container primary ${page !== 0 ? 'hidden' : ''}`}>

                            {eventList.map((item, index) => {

                                if (index < 4) {
                                    return (
                                        <div className="event-container"
                                            key={index}>
                                            <div className="date-box">
                                                <div className="date-content">
                                                    <h4>{item.date.day}</h4>
                                                    <h4>{item.date.month}</h4>
                                                </div>
                                            </div>
                                            <div className="image-container">
                                                <img src={`../../../images/${item.image}`} alt="/"></img>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="event-text-container">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return false;
                            })}
                        </div>

                        <div className={`events-section-container secondary ${page !== 1 ? 'hidden' : ''}`}>

                            {eventList.map((item, index) => {

                                if (index >= 4) {
                                    return (
                                        <div className="event-container"
                                            key={index}>
                                            <div className="date-box">
                                                <div className="date-content">
                                                    <h4>{item.date.day}</h4>
                                                    <h4>{item.date.month}</h4>
                                                </div>
                                            </div>
                                            <div className="image-container">
                                                <img src={`../../../images/${item.image}`} alt="/"></img>
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="event-text-container">
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return false;
                            })}
                        </div>
                    </div>
                    <div className={`button-container ${page !== 0 ? 'hidden' : ''}`}>
                        <ArrowButton clickHandler={() => changePage(1)} />
                    </div>

                    <div className={`button-container left ${page !== 1 ? 'hidden' : ''}`}>
                        <ArrowButton direction="left" clickHandler={() => changePage(0)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsSection;
