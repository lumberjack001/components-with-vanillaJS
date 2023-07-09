const template = document.createElement('template');

template.innerHTML= `
<link rel="stylesheet" href="./components/navbar/navbar.css">


<nav>
    <div class="logo">
        <img src="/assets/images/notification/logo 3(1).png" alt="Eco logo">
    </div>

    <div class="right-side__nav hidden">
        <div class="nav-links toggler">
            <a href="index.html">Home</a>

            <div class="dropdown">
                <button class="dropbtn">The Eco
                    <img src="/assets/images/notification/arrowdown.png" alt="arrow down"
                    class="eco-img">
                </button>
                <div class="dropdown-content d-none">
                    <a href="problems.html">ECO problems</a>
                    <a href="projects.html">ECO projects</a>
                  </div>
            </div>

            <a href="#">PAls App</a>
            <a href="#">Tech4Good</a>
            <a href="#">Services</a>
        </div>
        <div class="connect toggler skew">
            <a href="form.html" id="login1">Log In</a>
            <a href="form.html" id="create1">Create Account</a>
        </div>
    </div>
    <div class="menu">
        <button><img src="assets/images/notification/more.png" alt=""></button>
    </div>
</nav>
`;

class navBar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export default navBar;