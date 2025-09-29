import NavigationBar from "../sections/navigationbar";
import Hero from "../sections/hero";
import AboutMe from "../sections/aboutme";
import SmallStories from "../sections/smallstories";
import FrequentlyAskedQuestions from "../sections/frequentlyaskedquestions";
import ContactForm from "../sections/contactform";
import Footer from "../sections/footer";
import Attributes from "../sections/attributes";
import Articles from "../sections/articles";
import ServicesLpg from "../sections/serviceslpg";

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
            <NavigationBar />
            <Hero />
            <div className="px-8">
                <Attributes />
                <SmallStories />
            </div>
            <ServicesLpg />
            <AboutMe />
            {/* <Articles /> */}
            {/* <FrequentlyAskedQuestions /> */}
            <ContactForm />
            <Footer />
        </div>
    )
}

export default LandingPage;