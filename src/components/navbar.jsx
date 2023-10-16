const Navbar = (props) => {
    return ( 
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            { props.length }
        </div>
        </nav>
     );
}
 
export default Navbar;