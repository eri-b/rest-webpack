const setPage = () =>{
    const content = document.querySelector('#content');
    const header = "<header>This is the header</header>";
    const bg = "<div class='bg'>BG image here</div>";
    const title = "<h2>Tagline</h2>";
    const links = "<a id='contact'>contact</a><a id='menu'>menu</a>"
    const newContent = header + bg + title + links;
    content.innerHTML = newContent;
}


export default setPage;