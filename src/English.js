import React from "react";
import Ava from "./assets/ava.jpg";
const English = () => {
    return (
        <div className="container">
            <div className="profile animated fadeInLeft">
                <div className="profile__photo" style={{background: Ava}}></div>
                <div className="profile-info">
                    <h2 className="heading heading-light">Обо мне</h2>
                    <p className="profile-text">Hello! My name is Anton Chepur, I have been engaged in front-end development since 2019, m
                        y main tool is Pure Javascript and the React.js framework, as well as the layout of responsive HTML5 / CSS3 web pages using scss preprocessors and the Bootstrap library.
                        In addition, I am familiar with the technologies of MySQL, PHP, React Native, Vue.js and I have an understanding of BEM.
                    </p>
                </div>
                <div className="contacts">
                    <div className="contacts__item">
                        <h3 className="contacts__title">
                            <i className="fas fa-phone-alt"></i>Phone number/Whatsapp
                        </h3>
                        <a href="tel:+79788273047" target="blank" className="contacts-text-link">+7-978-827-3047</a>
                    </div>
                    <div className="contacts__item">
                        <h3 className="contacts__title">
                            <i className="fas fa-envelope"></i>Email
                        </h3>
                        <a href="mailto:antonkerch555@gmail.com" target="blank" className="contacts-text-link">antonkerch555@gmail.com</a>
                    </div>
                    <div className="contacts__item">
                        <h3 className="contacts__title">
                            <i className="fab fa-telegram-plane"></i>Telegram
                        </h3>
                        <p className="contacts-text">@Chepman32</p>
                    </div>
                    <div className="contacts__item">
                        <h3 className="contacts__title">
                            <i className="fab fa-facebook-f"></i>Facebook
                        </h3>
                        <a href="https://www.facebook.com/anton.cepur" target="blank" className="contacts-text-link">https://www.facebook.com/anton.cepur</a>
                    </div>
                </div>
                <h2 className="heading heading-light">Владение языками</h2>
                <div className="languages">
                    <div className="language"><span className="languages-text">Русский</span><strong className="languages-percent">100%</strong></div>
                    <div className="language"><span className="languages-text">English</span><strong className="languages-percent">70%</strong></div>
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>

            </div>
            <div className="resume animated fadeInRight">
                <div className="resume__wrap">
                    <div className="logo">
                        <div className="logo-lines logo-lines_left">
                            <div className="logo-line"></div>
                            <div className="logo-line"></div>
                            <div className="logo-line"></div>
                        </div>
                        <div className="logo-img">
                            A/C
                        </div>
                        <div className="logo-lines logo-lines_right">
                            <div className="logo-line"></div>
                            <div className="logo-line"></div>
                            <div className="logo-line"></div>
                        </div>
                    </div> {/* logo */}
                    <div className="about">
                        <h1 className="name">Антон Чепур</h1>
                        <span className="position">Фронтенд-разработчик (Middle)</span>
                        <address className="about-address">Россия, Крым, город Керчь</address>
                        <div className="about-contacts">
                            <a href="#" className="about-contacts__link"><b>t</b> : +7(978)8273047   |</a>
                            <a href="#" className="about-contacts__link"><b>e</b> : antonkerch555@gmail.com   |</a>
                        </div>
                    </div> {/* about */}
                    <div className="experience">
                        <h2 className="heading heading__dark">Опыт работы</h2>
                        <ul className="list">
                            <li className="list-item">
                                <h4 className="list-item__title">Geekbrains</h4>
                                <span className="list-item__date">Trainee, март 2019 - май 2019</span>
                                <p className="list-item__text">написание Frontend-части крупного
                                    учебного проекта, работа с другими участниками команды, разработка по методологии Scrum. В результате был создан randomizer.me</p>
                            </li>
                            <li className="list-item">
                                <h4 className="list-item__title">Брэдбери Лаб, ООО</h4>
                                <span className="list-item__date">pre-middle React-разработчик, июнь 2019 - апрель 2020</span>
                                <p className="list-item__text">разрабатывал SPA-приложения для CRM-системы, верстал страницы Интернет-магазина</p>
                            </li>
                        </ul>
                    </div> {/* experience */}
                    <h2 className="heading heading__dark">Образование</h2>
                    <ul className="list">
                        <li className="list-item list-item_nonBorder">
                            <h4 className="list-item__title">Севастопольский национальный технический университет, Севастополь</h4>
                            <span className="list-item__date">2010-2015</span>
                            <p className="list-item__text">Факультет автоматики и вычислительной техники, 7(8).080401-Информационные управляющие
                                системы и технологии</p>
                        </li>
                        <li className="list-item list-item_nonBorder">
                            <h4 className="list-item__title">Курсы веб-разработки от Mail.ru Group</h4>
                            <span className="list-item__date">2018</span>
                            <p className="list-item__text">Обучился основам верстки, расширил знания Javascript,
                                познакомился с фреймворками React и Vue</p>
                        </li>
                    </ul>
                    <h2 className="heading heading__dark heading__skills">skills</h2>
                    <div className="skills">
                        <ul className="skills-list">
                            <li className="skills-list__item">
                                JavaScript
                                <div className="level level-80"></div>
                            </li>
                            <li className="skills-list__item">
                                html5/css3
                                <div className="level level-90"></div>
                            </li>
                            <li className="skills-list__item">
                                React
                                <div className="level level-70"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default English;
