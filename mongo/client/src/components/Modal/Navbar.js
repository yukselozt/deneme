export default function Navbar(){
    return <nav className="nav">

        <a href="/"  className ="site-title"> CRUD APP - Food List App</a>

        <ul>
            <li className="active">
                <a href="/list"> Food List</a>
                
            </li>

            <li>
                <a href="/about"> About</a>
            </li>
        </ul>
    </nav>


}