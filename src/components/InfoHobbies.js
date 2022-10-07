import './styles/main.css';

const Hobbies = () => {
    return (
        <div className="info__hobbies">
        <h2 className="info__title information__title">hobbies</h2>
        <div className="info__hobbies-wrapper">
            <img className="info__hobbies-img" src="./images/icons/programming.png" alt=""></img>
            <img className="info__hobbies-img" src="./images/icons/music.png" alt=""></img>
            <img className="info__hobbies-img" src="./images/icons/book.png" alt=""></img>
            <img className="info__hobbies-img" src="./images/icons/car.png" alt=""></img>
            <img className="info__hobbies-img" src="./images/icons/diy.png" alt=""></img>
            <img className="info__hobbies-img" src="./images/icons/travel.png" alt=""></img>
        </div>
    </div>
    )
}

export default Hobbies;