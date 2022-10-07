import './styles/main.css';

const Education = () => {
    return (
        <div className="info__education">
        <h2 className="info__title information__title">education</h2>
        <div className="info__wrapper">
            <div className="info__dates">2021 - present</div>
            <div className="info__desc">
                <p className="info__description information__description">Education Centre "TeachMeSkills"</p>
                <p className="info__description information__description">(Frontend development)</p>
            </div>
            <div className="info__dates">2009 - 2013</div>
            <div className="info__desc">
                <p className="info__description information__description">Belarusian State Pedagogical University named after Maxim Tank (BSPU)</p>
                <p className="info__description information__description">(Music art. Social pedagogy)</p>
            </div>
            <div className="info__dates">2005 - 2009</div>
            <div className="info__desc">
                <p className="info__description information__description">Brest College of Music named after Grigory Shirma</p>
                <p className="info__description information__description">(Piano department)</p>
            </div>
        </div>
    </div>
    )
}

export default Education;