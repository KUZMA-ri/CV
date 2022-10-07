import './styles/main.css';
import Education from './InfoEducation';
import Experience from './InfoExperience';
import Skills from './InfoSkills';
import Languages from './InfoLanguages';
import Hobbies from './InfoHobbies';

const Info = () => {
    return (
        <div className="info">
            <Education />
            <Experience />
            <Skills />
            <Languages />
            <Hobbies />
    </div>
    )
}

export default Info;