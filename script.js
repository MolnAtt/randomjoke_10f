kerdojel.addEventListener('click',
    e => {
        alert("halihó");
        console.log(e.target);
        alert("lenyomták a gombot, aminek a felirata ez: " + e.target.innerHTML);
    }
);
