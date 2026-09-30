export default function header({ setPage, cartCount }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg site-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="logo.jpeg" alt="Bootstrap" width="50" height="50" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => setPage("home")} type="button">Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => setPage("products")} type="button">Products</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => setPage("cart")} type="button">Cart ({cartCount})</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control search-input me-4" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn custom-search" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}