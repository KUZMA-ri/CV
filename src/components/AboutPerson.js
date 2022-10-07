import './styles/main.css';

const Person = () => {
    return (
        <div className="about__person person">
        <img className="person__photo" src="./images/photo.jpg" alt=""></img>
        <div className="person__info">
            <h1 className="person__name">MARYNA</h1>
            <h1 className="person__last-name">KUZMIANKOVA</h1>
            <h4 className="person__position">WEB-DEVELOPER / <br></br>FRONTEND DEVELOPER</h4>
        </div>

    </div>
    )
}

export default Person;