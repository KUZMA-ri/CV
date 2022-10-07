import './styles/main.css';
import Person from './AboutPerson';
import Information from './AboutInformation';
import Contacts from './AboutContacts';

const About = () => {
    return (
        <div className="about">
            <Person />
            <Information />
            <Contacts />
    </div>
    )
}

export default About;