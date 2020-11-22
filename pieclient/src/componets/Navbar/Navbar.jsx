import './navbar.css'

const piepic = 'https://picsum.photos/200/300'

function Navbar(){
    return(
        <div>
            <nav>
                <img id='pic' src={piepic} alt=''></img>
            </nav>
        </div>
    )
}

export default Navbar;