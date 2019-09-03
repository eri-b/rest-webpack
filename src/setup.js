const setPage = () =>{
  window.onload = () => {
    console.log('wind loaded!');
    const content = document.querySelector('#content');
    const header = "<header>This is the header</header>";
    const bg = "<div class='bg'>BG image here</div>";
    const title = "<h2>Tagline</h2>";
    const newContent = header + bg + title;
    content.innerHTML = newContent;
  }
}


export default setPage;
