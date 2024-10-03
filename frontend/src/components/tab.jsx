

export default function Tabs() {


    return (
        <div className="container-md mt-3">
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/overview">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/insert">Finance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
            </ul>
        </div>
    )


}


