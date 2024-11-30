
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const addDarkModeButton = () => {
    const button = document.createElement('button');
    button.textContent = "Alternar Tema";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.onclick = toggleDarkMode;

    document.body.appendChild(button);
};

document.addEventListener('DOMContentLoaded', () => {
    const integrantes = document.querySelectorAll('.integrante');


    integrantes.forEach((card, index) => {
        const img = card.querySelector('img');
        if (img) {
            card.style.backgroundImage = `url(${img.src})`;
        }


        card.addEventListener('click', () => {
            card.classList.toggle('clicked');
        });
    });


    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Modo Escuro';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '20px';
    darkModeButton.style.padding = '10px 20px';
    darkModeButton.style.cursor = 'pointer';

    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    document.body.appendChild(darkModeButton);
});







document.querySelectorAll(".carrossel").forEach((carrossel) => {
    const items = carrossel.querySelectorAll(".item");
    let currentIndex = 0;


    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove("active");
            if (i === index) {
                item.classList.add("active");
            }
        });
    }


    carrossel.querySelector(".btn-prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });


    carrossel.querySelector(".btn-next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });


    items.forEach((item) => {
        const img = item.querySelector("img");
        const descricao = item.querySelector(".descricao");

        img.addEventListener("click", () => {
            descricao.style.display =
                descricao.style.display === "none" || !descricao.style.display
                    ? "block"
                    : "none";
        });
    });


    showItem(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const navGaleria = document.getElementById('nav-galeria');
    const navContato = document.getElementById('nav-contato');
    const galeriaSection = document.getElementById('galeria');
    const contatoSection = document.getElementById('contato');
    const sobreSection = document.getElementById('sobre');


    function esconderSecao() {
        galeriaSection.classList.add('hidden');
        contatoSection.classList.add('hidden');
        sobreSection.classList.add('hidden');
    }

    navGaleria.addEventListener('click', () => {
        esconderSecao();
        galeriaSection.classList.remove('hidden');
    });


    navContato.addEventListener('click', () => {
        esconderSecao();
        contatoSection.classList.remove('hidden');
    });


    document.getElementById('nav-home').addEventListener('click', () => {
        esconderSecao();
        sobreSection.classList.remove('hidden');
    });


    sobreSection.classList.remove('hidden');
});