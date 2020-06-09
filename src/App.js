import React from 'react';
import ruData from"./ruData"
import engData from "./engData";
import Ava from "./assets/ava.jpg";
class App extends React.Component {
    state = ruData
    componentDidMount() {
        setTimeout(this.setState({isLoading: false}), 2000)
    }
    translateToEn() {
        this.state.language === "Russian" ? this.setState(engData) : this.setState(ruData);
    }
  render() {
      return (
          <div className="container">
              <button className="switchLang" onClick={this.translateToEn.bind(this)}>{this.state.switchLangBtn} </button>
              <div className="profile animated fadeInLeft">
                  <div className="profile__photo" style={{background: Ava}}></div>
                  <div className="profile-info">
                      <h2 className="heading heading-light">{this.state.profile_text_title} </h2>
                      <p className="profile-text">{this.state.profile_text}</p>
                  </div>
                  <div className="contacts">
                      <div className="contacts__item">
                          <h3 className="contacts__title">
                              <i className="fas fa-phone-alt"></i>{this.state.contacts__title}
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
                  <h2 className="heading heading-light">{this.state.languages_title}</h2>
                  <div className="languages">
                      <div className="language"><span className="languages-text">{this.state.languages_text_russian}</span><strong className="languages-percent">100%</strong></div>
                      <div className="language"><span className="languages-text">{this.state.languages_text_english}</span><strong className="languages-percent">70%</strong></div>
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
      <h1 className="name">{this.state.name}</h1>
                          <span className="position">{this.state.desired_position}</span>
                          <address className="about-address">{this.state.about_address}</address>
                          <div className="about-contacts">
                              <a href="#" className="about-contacts__link"><b>t</b> : +7(978)8273047   |</a>
                              <a href="#" className="about-contacts__link"><b>e</b> : antonkerch555@gmail.com   |</a>
                          </div>
                      </div> {/* about */}
                      <div className="experience">
                          <h2 className="heading heading__dark">{this.state.experience_title}</h2>
                          <ul className="list">
                              <li className="list-item">
                                  <h4 className="list-item__title">Geekbrains</h4>
                                  <span className="list-item__date">Trainee, {this.state.geekbrains_period}</span>
                                  <p className="list-item__text">{this.state.geekbrains_text}</p>
                              </li>
                              <li className="list-item">
                                  <h4 className="list-item__title">{this.state.bradberry_period}</h4>
      <p className="list-item__text">{this.state.bradberry_text}</p>
                                  <span className="list-item__date">{this.state.bradberry_period} </span>
                              </li>
                          </ul>
                      </div> {/* experience */}
      <h2 className="heading heading__dark">{this.state.education_title}</h2>
                      <ul className="list">
                          <li className="list-item list-item_nonBorder">
                              <h4 className="list-item__title">{this.state.education_text}</h4>
                              <span className="list-item__date">2010-2015</span>
                              <p className="list-item__text">{this.state.education_faculty}</p>
                          </li>
                          <li className="list-item list-item_nonBorder">
                              <h4 className="list-item__title">{this.state.education_courses} </h4>
                              <span className="list-item__date">2018</span>
                              <p className="list-item__text">{this.state.education_achievment} </p>
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
  }
}

export default App;
