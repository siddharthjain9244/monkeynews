import { Link } from 'react-router-dom'

const Navbar = (props) => {
    let countries = [
        {
            key: 'United Arab Emirates',
            value: 'ae',
        },
        {
            key: 'India',
            value: 'in'
        },
        {
            key: 'United States of America',
            value: 'us'
        },
        {
            key: 'Switzerland',
            value: 'ch'
        },
        {
            key: 'Russia',
            value: 'ru'
        }, {
            key: 'France',
            value: 'fr'
        },
        {
            key: 'Australia',
            value: 'au'
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.querySelector('.select2').value;
        console.log("Selected Option:", selectedValue);
        props.changeCountry(selectedValue);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/">About</Link> </li> */}
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
                        </ul>

                    </div>
                    <form className="form-inline my-lg-0 d-flex flex-row bd-highlight mb-3 col-md-4" onSubmit={handleSubmit}>
                        <select className="form-control select2" defaultValue='in'>
                            {countries.map(country => <option value={country.value}> {country.key}</option>)}
                        </select>
                        <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
