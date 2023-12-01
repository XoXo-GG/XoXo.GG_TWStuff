    let repository = 'XoXo-GG/XoXo.GG_TWStuff';
    let autoBuilder = 'AutoBuilder_Standard.js';

    // Function to load and execute a script from GitHub
    function loadScript(repository, file) {
        const scriptURL = `https://raw.githubusercontent.com/${repository}/main/${file}`;

        GM_xmlhttpRequest({
            method: 'GET',
            url: scriptURL,
            onload: function(response) {
                const scriptCode = response.responseText;
                const scriptElement = document.createElement('script');
                scriptElement.textContent = scriptCode;
                document.head.appendChild(scriptElement);
            }
        });
    }
    if(window.location.href.indexOf("screen=main") > -1){
        loadScript(repository,autoBuilder);
    }
