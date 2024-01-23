

ujviccgomb.addEventListener('click',
    async e => {
        if(!valaszdiv.classList.contains('nemlatszik'))
        {
            valaszdiv.classList.toggle('nemlatszik');
        }

        let szervervalasz_szotar = await olvaso_fetch('https://official-joke-api.appspot.com/random_joke');

        kerdesdiv.innerHTML = szervervalasz_szotar['setup'];
        valaszdiv.innerHTML = szervervalasz_szotar['punchline'];
    }
);



kerdojel.addEventListener('click',
    e => {
        valaszdiv.classList.toggle('nemlatszik');
    }
);


async function olvaso_fetch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}
