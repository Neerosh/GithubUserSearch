var header = document.getElementById('Menu'); 
var userLang = document.documentElement.getAttribute('lang');
var pageURI = document.documentURI;
var page = pageURI.substring(pageURI.lastIndexOf('/'));

console.log(page);
loadMenu();
markActiveLink();

function loadMenu(){
    if (userLang == "pt-BR"){
        header.innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark">
                <div class="container-xxl">
                    <a class="navbar-brand" href="/index">Neerosh Space</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/githubUserSearch_pt-BR">
                                    <i class="bi bi-github me-1"></i>Pesquisa Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`
        return;
    }
    
    header.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-xxl">
                    <a class="navbar-brand" href="/index">Neerosh Space</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/githubUserSearch_en-US">
                                <i class="bi bi-github me-1"></i>Search Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`

}

function markActiveLink(){
    var activelink = document.getElementsByClassName('nav-link');
    var array = [].slice.call(activelink);
    array.forEach((element) => {
        element.classList.remove('active');
        if (element.getAttribute('href') == page){
            element.classList.add('active');
        }
    });
}