document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar dados do arquivo JSON
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            return response.json();
        })
        .then(data => {
            // Adiciona os itens na lista
            const categoryList = document.getElementById('category-list');
            data.forEach(item => {
                const listItem = document.createElement('li');

                listItem.classList.add(item.category.toLowerCase());

                
                const iconImg = document.createElement('img');
                iconImg.src = item.icon;
                iconImg.alt = item.category;

                const categoryName = document.createElement('span');
                categoryName.className = 'category-name';
                categoryName.textContent = item.category;

                const categoryScore = document.createElement('span');
                categoryScore.className = 'category-score';
                categoryScore.textContent = `${item.score} /100`;

                listItem.appendChild(iconImg);
                listItem.appendChild(categoryName);
                listItem.appendChild(categoryScore);
                categoryList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
});
