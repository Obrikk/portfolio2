import '../scss/home.scss'
import Profile from '../../public/img/Menu.png'


function Main() {
    return ( 
        <main>
            <section className="description">
                <div className="text">
                    <h1>HETE Audric</h1>
                    <p>Full-stack developer</p>
                </div>
                <img src={Profile} alt="" />
            </section>
        </main>
     );
}

export default Main;