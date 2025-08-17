import Profile from '../../assets/myself.jpg'
import { Link } from 'react-router'
import { RiArrowRightLine } from 'react-icons/ri'
import './Home.css'

const Home = () => {
    return (
        <section className = 'home-container grid'>

            <img src =  { Profile } alt = '' className = 'home-img' />

            <div className = 'home-content'>
                <h1 className = 'home-title'>
                    <span> I'm Little Goat </span>
                    <br /> - The Programer
                </h1>

                <p className = 'home-description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <Link to = '/about' className = 'button'> More About Me!
                    <span className = 'button-icon'>
                        <RiArrowRightLine />
                    </span>
                </Link>
            </div>

            <div className = 'color-block'></div>

        </section>
    )
}

export default Home