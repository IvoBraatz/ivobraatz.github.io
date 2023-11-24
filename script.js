// Selecionando todos os elementos com a classe 'projects'
const projects = document.querySelectorAll('.projects');

// Percorrendo cada elemento .projects
projects.forEach(project => {
    project.addEventListener('mousemove', e => {
        const xAxis = (e.pageX - project.offsetLeft - project.offsetWidth / 2) / 10; // Calculando a posição do mouse no eixo X
        const yAxis = (project.offsetTop + project.offsetHeight / 2 - e.pageY) / 10; // Calculando a posição do mouse no eixo Y

        // Selecionando a imagem dentro do elemento .projects atual
        const image = project.querySelector('.project__image');

        // Aplicando a rotação com base na posição do mouse para a imagem
        image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

        // Selecionando o título dentro do elemento .projects atual
        const title = project.querySelector('.project__title');

        // Aplicando a rotação com base na posição do mouse para o título
        title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Resetando a rotação quando o mouse sai da área do elemento .projects
    project.addEventListener('mouseleave', () => {
        const image = project.querySelector('.project__image');
        image.style.transform = 'rotateY(0deg) rotateX(0deg)';

        const title = project.querySelector('.project__title');
        title.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
