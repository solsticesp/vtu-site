import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-content-container">
                <div className="footer-container">
                    <div className="footer-item-container">
                        <div className="footer-menu">
                            <div className="menu">
                                <span>За университета</span>
                                <span>Студенти</span>
                                <span>Факултети</span>
                                <span>Кариери</span>
                                <span>Акредитация</span>
                                <span>Библиотека</span>
                                <span>Издателство</span>
                                <span>Контакти</span>
                            </div>
                        </div>
                        <div className="footer-more">
                            <div className="menu">
                                <span>Новини</span>
                                <span>Събития</span>
                                <span>Научна дейност</span>
                                <span>Кариерен център</span>
                                <span>Виртуална Разходка</span>
                                <span>Профил на купувача</span>
                                <span>Обратна връзка</span>
                            </div>
                        </div>
                        <div className="footer-contacts">
                            <div className="address"><b>Великотърновски университет</b><br></br>
                                ул. „Теодосий Търновски“ 2, 5003 Велико Търново
                            </div>
                            <img src="../../../images/sertificates.gif" alt="/"></img>
                            <div className="socialmedia-icons">
                                <a href="/"><img src="../../../images/linkedin.svg" alt="/"></img></a>
                                <a href="/"><img src="../../../images/twitter.svg" alt="/"></img></a>
                                <a href="/"><img src="../../../images/instagram.svg" alt="/"></img></a>
                                <a href="/"><img src="../../../images/facebook.svg" alt="/"></img></a>
                                <a href="/"><img src="../../../images/youtube.svg" alt="/"></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div>
                            © Великотърновски университет "Св. св. Кирил и Методий" 2016 - 2024 Контакти За сайта
                        </div>
                        <div>
                            Сайтът използва бисквитки (cookies). Ако продължите да използвате сайта ни, се съгласявате с политиката за бисквитки.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Footer;