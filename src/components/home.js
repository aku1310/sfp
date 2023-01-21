import { Component } from 'react';
import React from 'react';
import './css/home.scss'
import {
    registerItems,
    // timelineItems,
    prizeItems,
    GoldSponsors,
    PlatSponsors,
    // PlatformPartners,
    // Sponsors,
    // CommunityPartners,
    FAQs,
} from './js/homeData'
import Aos from 'aos';
import 'aos/dist/aos.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';

function useEffectfun() {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
}

function buttonUnique(item) {
    if (item.cardTitle.toLowerCase() == "delhi") {
        return (
            <div
                class="apply-button"
                data-hackathon-slug="indiatourdelhi"
                data-button-theme="light"
            ></div>
        )
    }

    if (item.cardTitle.toLowerCase() == "punjab") {
        return (
            <div
                class="apply-button"
                data-hackathon-slug="indiatourpunjab"
                data-button-theme="light"
            ></div>
        )
    }

    else {
        return (<button href={item.applyLink} target="_blank"
            className={item.applyStatus == "Apply" ? "" : "disabled"}
            readonly>{item.applyStatus}
        </button>)
    }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            page: "home",
        };
    }

    handleResize = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        Aos.init({
            duration: 500,
        });
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    carouselBreakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1 }
    ];



    render() {
        const { items } = this.state;
        return (
            <>
                {useEffectfun}
                <span hidden="true" id="page-name">Home</span>
                {/* Header */}

                <header className="header">
                    <div className="header-content">
                        <h1>Social Fellowship Program</h1>
                        {/* <div className="header-logo">
                            <a href="./index.html"><img src="./img/logo-2.png" /></a>
                        </div> */}
                    </div>
                </header>
                {/* body */}


                <a name="about"></a>
                <section className="body-content about-swoc" id="about">
                    <div className="about-content col-lg-7">
                        <h3>About <span>Social Fellowship Program</span></h3>
                        <p>
                            The SFP, or Social Fellowship Program, is a community-driven initiative aimed at fostering the growth and development of the web3 ecosystem. We believe that by fostering collaboration and cooperation among members of the web3 community, we can help to build a more robust and resilient platform for the future of the internet.
                        </p>
                        <p>
                            Our mission is to provide support and resources to individuals and organizations working on projects that align with the principles of web3, including decentralization, transparency, and community-driven development. We believe that by working together, we can help to advance the web3 ecosystem and bring about a more decentralized and open internet for all.
                        </p>
                        <p>
                            Our program includes a variety of activities and initiatives, including mentorship, networking, and educational resources. We also host regular meetups and events to bring members of the community together and foster collaboration and learning.
                        </p>
                        <p>
                            If you're interested in getting involved with the SFP and contributing to the growth of the web3 ecosystem, we encourage you to reach out and join our community today. Together, we can build a better internet for all.
                        </p>
                        {/* <p>
                            The students will be guided by experienced mentors throughout their
                            journey. They will learn the skills essential in the world of
                            programming, all the while developing a deep appreciation for the
                            world of open-source.
                        </p> */}
                    </div>
                    <div className="about-vector">
                        {/* <img src="./img/about.png" /> */}
                        <img src="./img/github.gif" />
                    </div>
                </section>



                <section className="cards-bg-sec to-apply">
                    <div className="apply-sec body-content">
                        <h3 className="card__card__title">Registration</h3>
                        <div className="row">
                            {registerItems.map((item, index) => {
                                return (
                                    <div className="col-md-4 card-cover">
                                        <div className="h-100 to-apply-card card__card__body">
                                            <h5 className="card-title">{item.cardTitle}</h5>
                                            {/* <p className="card-text">{item.cardText}</p> */}
                                            {item.cardText.split("|").map((el) => {
                                                return (
                                                    <p className="card-text">
                                                        {el}
                                                    </p>
                                                );
                                            })}
                                            <div className="btn-apply">
                                                 {/* {item.cardTitle.toLowerCase() == "web 3.0 fellowship" ? */}
                                                    <div
                                                        class="apply-button"
                                                        data-hackathon-slug=""
                                                        data-button-theme="light"
                                                    ></div>

                                                    {/* // :
                                                    // (item.cardTitle.toLowerCase() == "punjab" ?
                                                    //     (<div
                                                            class="apply-button"
                                                            data-hackathon-slug="indiatourpunjab"
                                                            data-button-theme="light"
                                                        ></div>)
                                                        :
                                                        (<a href={item.applyLink} target="_blank"
                                                            className={item.applyStatus == "Apply" ? "" : "disabled"}
                                                            readonly>{item.applyStatus}
                                                        </a>) */}
                                                
                                                {/* {buttonUnique(item)} */}

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* <section className="event-together">
                    <div className="body-content">
                        <h3>This time we are together</h3>
                        <div className="together-logos">
                            <div className="logo-swoc">
                                <img src={"/img/logo-1-copy.png"} />
                            </div>
                            <span>+</span>
                            <div className="logo-cwoc">
                                <img src={"/img/logos/CatsInTech.png"} />
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* timeline */}
                {/* <section className="timeline">
                    <a name="timeline"></a>
                    <div className="timeline-head">
                        <h3 className="card__card__title">Program Timeline</h3>
                    </div>
                    <ul>
                        {timelineItems.map((item, index) => {
                            return (
                                <li>
                                    <time>{item.timelineDate}</time>
                                    <div className="card__card__body timeline-item">
                                        <span className="time-responsive">{item.timelineDate}</span>
                                        {item.timelineText}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                <section className="overview-section">
                    <div className="body-content overview-container">
                        <div className="overview-vector">
                            <img src="./img/overview.svg" />
                        </div>
                        <div className="overview-content">
                            <h3>Overview</h3>
                            <p>
                                Script Winter Of Code is the 3 month long open source program by
                                Social India , with the aim to introduce more and more
                                people to the world of Open source. In this program all the selected
                                participants will get a chance to work on various exciting projects
                                under the guidance of experienced Mentors.
                            </p>
                            <p>
                                Participants can select the project based on their interest and tech
                                stack , and can communicate with mentors and project admin to know the
                                project better during the Community bonding Period .
                            </p>
                        </div>
                    </div>
                </section> */}

                <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">
                            Prizes And Rewards
                        </h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {prizeItems.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.prizeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">
                                                    {item.prizeTitle}
                                                    {item.provider && (
                                                        <>
                                                            <br />
                                                            <span class="provider">{item.provider}</span>
                                                        </>
                                                    )}
                                                </h3>
                                                <ul>
                                                    {item.prizeDescription.split("|").map((el) => {
                                                        return (
                                                            <li>
                                                                <p className="card-text">{el}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                {item.more && (
                                                    <a
                                                        target="_blank"
                                                        href={item.prizeLink}
                                                        className="learn-more"
                                                    >
                                                        {item.more}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">Prizes And Rewards</h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {prizeItems.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.prizeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">{item.prizeTitle}</h3>
                                                <p className="card-text">{item.prizeDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>

                    <div className="about-vector">
                        <img src={"/img/trophy2-min.jpg"} />
                    </div>
                </section> */}

                <section className="sponsors-section">
                    <a name="sponsors"></a>
                    {/* <div className="body-content powered-conatiner">
                        <h3 className="">Powered by</h3>
                        <img src={"/img/logos/Devfolio_Logo.svg"} />
                    </div> */}
                    <div className="body-content sponsors-conatiner">
                        <h3 className="sponsors-title">Our Sponsors</h3>
                        <br />
                        <div className="community">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Platinum Sponsors</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid" style={{ "justify-content": "center" }}>
                                            {PlatSponsors.map((item, index) => {
                                                return (
                                                    <div className="col-md-4 col-sm-6 img-div">
                                                        <a href={item.sponsorLink} target="_blank">
                                                            <img className="sponsor-img" src={item.sponsorImg} />
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h3>Gold Sponsors</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid" style={{ "justify-content": "center" }}>
                                            {GoldSponsors.map((item, index) => {
                                                return (
                                                    <div className="col-md-4 col-sm-6 img-div">
                                                        <a href={item.sponsorLink} target="_blank">
                                                            <img className="sponsor-img" src={item.sponsorImg} />
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            {/* <h3>Sponsors</h3>
                            <div className="row row-img grid mb-4">
                                {Sponsors.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            {/* <h3>Community Partners</h3>
                            <div className="row row-img grid mb-4">
                                {CommunityPartners.map((item, index) => {
                                return (
                                    <div className="col-md-4 img-div">
                                        <a href={item.sponsorLink} target="_blank">
                                            <img className="sponsor-img" src={item.sponsorImg} />
                                        </a>
                                    </div>                                              
                                )
                                })}
                            </div> */}

                            <div className="btn-container p-4" style={{ "text-align": "center" }}>
                                <br />
                                <a
                                    href="https://drive.google.com/file/d/1po-yevUP5dweJiNdvuiEhsi_IyKlOub8/view?usp=sharing"
                                    target="_blank"
                                    className="btn btn-info btn-lg"
                                >Sponsor Us
                                </a>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="faqs">
                    <h3 className="faq-title">FAQs</h3>

                    <div className="body-content">
                        {FAQs.map((item, index) => {
                            return (
                                <div className="faq-item">
                                    <input type="checkbox" id={item.questionId} name="q" className="question-input" />
                                    <label for={item.questionId} className="question">
                                        <div className="plus">+</div>
                                        {item.questionText}
                                    </label>
                                    <div className="answers">
                                        {item.answerText}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </>
        );
    }
}

export default Home;