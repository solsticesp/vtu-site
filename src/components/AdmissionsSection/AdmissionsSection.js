import React from "react";
import './AdmissionsSection.css';

const AdmissionsSection = () => {

    return (
        <div className="admission-section">
            <div className="main-content-container">
                <div className="admission-section-container">
                    <div className="section-head">
                        <h1>ПРИЕМ</h1>
                        <button className="show-all">виж всички</button>
                    </div>
                    <div className="admission-articles-container">
                        <div className="single-article">
                            <div className="image-container">
                                <img src="../../../images/application.jpg" alt="/"></img>
                                <div className="image-overlay"></div>
                            </div>
                            <div className="content">
                                <h3>Как да кандидатствам?</h3>
                                <p>Научете общите правила за кандидатстване и как да кандидатствате за прием в учебни програми на ВТУ: подгответе вашата кандидатура, регистрирайте се онлайн, потвърдете регистрацията си, положете изпита, проверете резултатите и се запишете.</p>
                            </div>
                        </div>
                        <div className="single-article">
                            <div className="image-container">
                                <img src="../../../images/schedule.jpeg" alt="/"></img>
                                <div className="image-overlay"></div>
                            </div>
                            <div className="content">
                                <h3>График на кандидатстудентската кампания</h3>
                                <p>Запознайте се с графика за кандидатстване за новата академична година. Научете за решаващите дати и крайни срокове за следващите кръгове за кандидатстване. </p>
                            </div>
                        </div>
                        <div className="single-article">
                            <div className="image-container">
                                <img src="../../../images/foreign.webp" alt="/"></img>
                                <div className="image-overlay"></div>
                            </div>
                            <div className="content">
                                <h3>Прием чуждестранни студенти</h3>
                                <p>Вижте широката гама от учебни програми на чужди езици, предлагани от Великотърновския университет: от хуманитарни и социални науки до точни, естествени науки, на различни нива на образование. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default AdmissionsSection;