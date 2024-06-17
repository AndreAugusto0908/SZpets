# SZpets
Passo a Passo para Usuários: Utilização do Aplicativo SZpets

Bem-vindo ao SZpets! Este aplicativo ajuda você a encontrar o melhor PetShop com base na data selecionada e no número de cães que você possui. Aqui está como você pode usar:
Passo 1: Selecionar a Data

    No formulário inicial, clique na caixa de seleção de data.
    Um calendário será exibido onde você pode escolher a data desejada. Apenas datas a partir de hoje são permitidas.
    Selecione a data desejada clicando sobre ela no calendário.

Passo 2: Informar o Número de Cães

    Após selecionar a data, insira o número de cães pequenos (menores de 10 kg) e grandes (10 kg ou mais) que você possui nos campos apropriados.
    Os campos de número de cães aceitam apenas valores numéricos maiores ou iguais a zero.

Passo 3: Enviar os Dados

    Depois de selecionar a data e informar o número de cães, clique no botão "Enviar".
    O aplicativo enviará essas informações para o servidor, que calculará e retornará o melhor PetShop com base nos critérios fornecidos.

Passo 4: Visualizar Resultados

    Uma vez que o servidor responda com os dados do melhor PetShop, você verá essas informações na tela.
    As informações exibidas incluem o nome do PetShop, a distância até o local desejado e o custo total estimado para os serviços.

Passo 5: Navegar pelos Resultados

    Se desejar, você pode visualizar diferentes opções de PetShops, repetindo os passos 1 a 3 com novas datas ou números de cães.
    Cada vez que você enviar um novo conjunto de dados, o aplicativo calculará e exibirá o PetShop mais adequado para você.

Técnicas Utilizadas no Desenvolvimento:

    React: Utilizei o framework React para criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

    React Hooks (useState): Utilizei os hooks do React, como useState, para gerenciar o estado local dentro dos componentes funcionais. Isso me permitiu atualizar dinamicamente a interface do usuário com base nas interações do usuário.

    React-DatePicker: Integrei o componente DatePicker do React-DatePicker para facilitar a seleção de datas de forma amigável ao usuário. Isso garante que as datas inseridas estejam no formato correto e sejam válidas.

    Comunicação com o Servidor: Utilizei fetch API para enviar requisições POST ao servidor backend em Node.js. Isso incluiu o envio de dados formatados em JSON e o tratamento das respostas para exibição dos resultados na interface do usuário.

    Validação de Dados: Implementei validações tanto no frontend quanto no backend para garantir que os dados inseridos sejam válidos e que as respostas do servidor estejam corretas. Isso incluiu verificar se as datas são válidas, se os números de cães são números inteiros e positivos, e se os dados retornados pelo servidor estão no formato esperado.

    Estilização com CSS: Utilizei arquivos CSS para estilizar os componentes e garantir uma interface de usuário agradável e intuitiva. Isso incluiu o uso de classes CSS para definir cores, margens, preenchimentos e outros estilos visuais.
