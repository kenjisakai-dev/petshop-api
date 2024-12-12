# Petshop API

A Petshop API permite o gerenciamento de informações dos proprietário dos animais e serviços prestados pelo petshop.

## Modelo Relacional da API

-   A tabela Owners possui dados dos donos dos animais
-   A tabela Animals possui dados dos animais
-   A tabela Service possui dados dos serviços contratados pelo dono do animal
-   A tabela Post possui dados das postagens do petshop e os comentários do proprietários do petshop (MongoDB)

![alt text](docs/DER-PetshopAPI.png)

## 🚀 Tecnologias Utilizadas

-   **`express`**  
    É um framework para Node.js utilizado para facilitar a criação da API

-   **`cors`**  
    Utilizado para controlar quais páginas web podem fazer requisições para a API

-   **`dotenv`**  
    Utilizado para carregar variáveis de ambiente a partir de um arquivo `.env` para a aplicação

-   **`winston`**  
    Utilizado para gerenciar e personalizar o log da API

-   **`mongodb`**  
    É uma biblioteca utilizada para permitir a interação com o banco de dados MongoDB

-   **`mongoose`**
    O Mongoose é uma biblioteca utilizada para modelar os documentos do banco de dados MongoDB de uma forma mais estruturada e organizada

-   **`sequelize`**
    O Sequelize é uma ORM utilizado para interagir com o bancos de dados relacional MySQL

-   **`mysql2`**
    O MySQL2 é uma biblioteca utilizada para permitir a interação com bancos de dados MySQL

## 🛠️ Como executar o projeto

1. Instale as dependências do projeto

    ```sh
    npm install
    ```

2. Criação das variáveis de ambiente

    1. Crie um arquivo chamado `.env` na raiz do projeto
    2. Declare as variávis de ambiente

        ```
        DB_USERNAME = "usuário"
        DB_PASSWORD = "senha"
        DB_SERVER = "servidor-banco"
        DB_DATABASE = "nome-banco"

        MONGODB_CONNECTION_STRING = "string de conexão do mongoDB"
        ```

3. Execute o endpoint `http://localhost:3000/database/create` para gerar as tabelas no banco de dados

4. Inicie a API

    ```sh
    npm run start
    ```

## 🔛 Como consultar os endpoints

### Proprietários dos Animais

<details>
  <summary>POST /api/v1/owner/create - Endpoint responsável por cadastrar um proprietário</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**            | **Obrigatório** |
| -------- | ------------- | ------------------------ | --------------- |
| body     | `name`        | Nome do proprietário     | Sim             |
| body     | `cpf`         | CPF do proprietário      | Sim             |
| body     | `phone`       | Telefone do proprietário | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                             |
| ---------- | ----------- | ----------------------------------------- |
| 201        | Created     | O proprietário foi cadastrado com sucesso |
| 400        | Bad Request | Houve um erro ao cadastrar o proprietário |

#### **Resposta 201 do endpoint**

```json
{
    "cod_owner": 1,
    "name": "Antonella Rafaela Luana Castro",
    "cpf": "88049272834",
    "phone": "11995681368",
    "updatedAt": "2024-12-12T22:39:49.315Z",
    "createdAt": "2024-12-12T22:39:49.315Z"
}
```

</details>

<details>
  <summary>GET /api/v1/owner/info/:cod_owner - Endpoint responsável por obter informações do proprietário</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**          | **Obrigatório** |
| ----------------- | ------------- | ---------------------- | --------------- |
| Parâmetro de rota | `cod_owner`   | Código do proprietário | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                            |
| ---------- | ----------- | -------------------------------------------------------- |
| 200        | Ok          | As informações do proprietário foram obtidas com sucesso |
| 400        | Bad Request | Houve um erro ao obter informações do proprietário       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_owner": 1,
    "name": "Antonella Rafaela Luana Castro",
    "cpf": "88049272834",
    "phone": "11995681368",
    "createdAt": "2024-12-12T22:39:49.000Z",
    "updatedAt": "2024-12-12T22:39:49.000Z",
    "animals": [
        {
            "cod_animal": 1,
            "name": "Body",
            "bread": "Boder Collie",
            "color": "Preto e Branco",
            "createdAt": "2024-12-12T22:42:47.000Z",
            "updatedAt": "2024-12-12T22:42:47.000Z",
            "services": [
                {
                    "cod_service": 1,
                    "description": "Banho",
                    "value": "90",
                    "createdAt": "2024-12-12T22:43:06.000Z",
                    "updatedAt": "2024-12-12T22:43:06.000Z"
                }
            ]
        }
    ]
}
```

</details>

<details>
  <summary>PATCH /api/v1/owner/update - Endpoint responsável por atualizar informações do proprietário</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**            | **Obrigatório** |
| -------- | ------------- | ------------------------ | --------------- |
| body     | `cod_owner`   | Código do proprietário   | Sim             |
| body     | `name`        | Nome do proprietário     | Não             |
| body     | `cpf`         | CPF do proprietário      | Não             |
| body     | `phone`       | Telefone do proprietário | Não             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                                |
| ---------- | ----------- | ------------------------------------------------------------ |
| 200        | Ok          | As informações do proprietário foram atualizadas com sucesso |
| 400        | Bad Request | Houve um erro ao atualizar informações do proprietário       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_owner": 1,
    "name": "Antonella Rafaela Luana Castro",
    "cpf": "88049272834",
    "phone": "11995681368",
    "createdAt": "2024-12-12T22:39:49.000Z",
    "updatedAt": "2024-12-12T22:44:08.000Z"
}
```

</details>

### Animais

<details>
  <summary>POST /api/v1/animal/create - Endpoint responsável por cadastrar um animal</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**          | **Obrigatório** |
| -------- | ------------- | ---------------------- | --------------- |
| body     | `name`        | Nome do animal         | Sim             |
| body     | `bread`       | Raça do animal         | Sim             |
| body     | `color`       | Cor do animal          | Sim             |
| body     | `cod_animal`  | Código do proprietário | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                       |
| ---------- | ----------- | ----------------------------------- |
| 201        | Created     | O animal foi cadastrado com sucesso |
| 400        | Bad Request | Houve um erro ao cadastrar o animal |

#### **Resposta 201 do endpoint**

```json
{
    "cod_animal": 1,
    "name": "Body",
    "bread": "Boder Collie",
    "color": "Preto e Branco",
    "cod_animal": 1,
    "updatedAt": "2024-12-12T22:42:47.960Z",
    "createdAt": "2024-12-12T22:42:47.960Z"
}
```

</details>

<details>
  <summary>GET /api/v1/animal/info/:cod_animal - Endpoint responsável por obter informações do animal</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**    | **Obrigatório** |
| ----------------- | ------------- | ---------------- | --------------- |
| Parâmetro de rota | `cod_animal`  | Código do animal | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                      |
| ---------- | ----------- | -------------------------------------------------- |
| 200        | Ok          | As informações do animal foram obtidas com sucesso |
| 400        | Bad Request | Houve um erro ao obter informações do animal       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_animal": 1,
    "name": "Body",
    "bread": "Boder Collie",
    "color": "Preto e Branco",
    "createdAt": "2024-12-12T22:42:47.000Z",
    "updatedAt": "2024-12-12T22:42:47.000Z",
    "cod_owner": 1,
    "services": [
        {
            "cod_service": 1,
            "description": "Banho",
            "value": "90",
            "createdAt": "2024-12-12T22:43:06.000Z",
            "updatedAt": "2024-12-12T22:43:06.000Z"
        }
    ]
}
```

</details>

<details>
  <summary>PATCH /api/v1/animal/update - Endpoint responsável por atualizar informações do animal</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**          | **Obrigatório** |
| -------- | ------------- | ---------------------- | --------------- |
| body     | `cod_animal`  | Código do animal       | Sim             |
| body     | `name`        | Nome do animal         | Não             |
| body     | `bread`       | Raça do animal         | Não             |
| body     | `color`       | Cor do animal          | Não             |
| body     | `cod_owner`   | Código do proprietário | Não             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                          |
| ---------- | ----------- | ------------------------------------------------------ |
| 200        | Ok          | As informações do animal foram atualizadas com sucesso |
| 400        | Bad Request | Houve um erro ao atualizar informações do animal       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_animal": 1,
    "name": "Body",
    "bread": "Boder Collie",
    "color": "Preto e Branco",
    "createdAt": "2024-12-12T22:42:47.000Z",
    "updatedAt": "2024-12-12T22:52:50.000Z",
    "cod_owner": 1
}
```

</details>

### Serviços

<details>
  <summary>POST /api/v1/service/create - Endpoint responsável por cadastrar um serviço prestado</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**        | **Obrigatório** |
| -------- | ------------- | -------------------- | --------------- |
| body     | `description` | Descrição do serviço | Sim             |
| body     | `value`       | Valor do serviço     | Sim             |
| body     | `cod_animal`  | Código do animal     | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                 |
| ---------- | ----------- | --------------------------------------------- |
| 201        | Created     | O serviço prestado foi cadastrado com sucesso |
| 400        | Bad Request | Houve um erro ao cadastrar o serviço prestado |

#### **Resposta 201 do endpoint**

```json
{
    "cod_service": 1,
    "description": "Banho",
    "value": 90,
    "cod_animal": 1,
    "updatedAt": "2024-12-12T22:43:06.999Z",
    "createdAt": "2024-12-12T22:43:06.999Z"
}
```

</details>

<details>
  <summary>GET /api/v1/service/info/:cod_service - Endpoint responsável por obter informações do serviço prestado</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição**     | **Obrigatório** |
| ----------------- | ------------- | ----------------- | --------------- |
| Parâmetro de rota | `cod_service` | Código do serviço | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                                |
| ---------- | ----------- | ------------------------------------------------------------ |
| 200        | Ok          | As informações do serviço prestado foram obtidas com sucesso |
| 400        | Bad Request | Houve um erro ao obter informações do serviço prestado       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_service": 1,
    "description": "Banho",
    "value": "90",
    "createdAt": "2024-12-12T22:43:06.000Z",
    "updatedAt": "2024-12-12T22:43:06.000Z",
    "animal": {
        "cod_animal": 1,
        "name": "Body",
        "bread": "Boder Collie",
        "color": "Preto e Branco",
        "createdAt": "2024-12-12T22:42:47.000Z",
        "updatedAt": "2024-12-12T22:52:50.000Z",
        "owner": {
            "cod_owner": 1,
            "name": "Antonella Rafaela Luana Castro",
            "cpf": "88049272834",
            "phone": "11995681368",
            "createdAt": "2024-12-12T22:39:49.000Z",
            "updatedAt": "2024-12-12T22:44:08.000Z"
        }
    }
}
```

</details>

<details>
  <summary>PATCH /api/v1/service/update - Endpoint responsável por atualizar informações do serviço prestado</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**        | **Obrigatório** |
| -------- | ------------- | -------------------- | --------------- |
| body     | `cod_service` | Código do serviço    | Sim             |
| body     | `description` | Descrição do serviço | Não             |
| body     | `value`       | Valor do serviço     | Não             |
| body     | `cod_animal`  | Código do animal     | Não             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                                    |
| ---------- | ----------- | ---------------------------------------------------------------- |
| 200        | Ok          | As informações do serviço prestado foram atualizadas com sucesso |
| 400        | Bad Request | Houve um erro ao atualizar informações do serviço prestado       |

#### **Resposta 200 do endpoint**

```json
{
    "cod_service": 1,
    "description": "Banho",
    "value": "90",
    "createdAt": "2024-12-12T22:43:06.000Z",
    "updatedAt": "2024-12-12T23:04:03.000Z",
    "cod_animal": 1
}
```

</details>

### Serviços

<details>
  <summary>POST /api/v1/post/create - Endpoint responsável por criar um post do petshop</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**    | **Obrigatório** |
| -------- | ------------- | ---------------- | --------------- |
| body     | `title`       | Título do post   | Sim             |
| body     | `content`     | Conteúdo do post | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                 |
| ---------- | ----------- | ----------------------------- |
| 201        | Created     | O Post foi criado com sucesso |
| 400        | Bad Request | Houve um erro ao criar o post |

#### **Resposta 201 do endpoint**

```json
{
    "title": "Banho Especial para Seu Pet!",
    "content": "Dê ao seu pet o cuidado que ele merece! Nosso serviço de banho inclui higienização completa com produtos específicos para cada tipo de pelagem, além de muito carinho e atenção. Seu companheiro sairá limpo, cheiroso e feliz! Agende agora e traga seu pet para um momento de bem-estar e conforto.",
    "_id": "675b6e2c056aabda335d75e5",
    "comments": [
        {
            "name": "Antonella Rafaela Luana Castro",
            "comment": "Que incrível! É maravilhoso ver o carinho e cuidado que vocês têm com os pets. Com certeza vou agendar um banho para o meu companheiro de quatro patas!",
            "_id": "675b6e2c056aabda335d75e5"
        }
    ],
    "__v": 0
}
```

</details>

<details>
  <summary>GET /api/v1/post/info/:_id - Endpoint responsável por obter post do petshop</summary>

#### **Parâmetros da Requisição**

| **Tipo**          | **Parâmetro** | **Descrição** | **Obrigatório** |
| ----------------- | ------------- | ------------- | --------------- |
| Parâmetro de rota | `_id`         | ID do post    | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                 |
| ---------- | ----------- | ----------------------------- |
| 200        | Ok          | O post foi obtido com sucesso |
| 400        | Bad Request | Houve um erro ao obter post   |

#### **Resposta 200 do endpoint**

```json
{
    "_id": "675b6e2c056aabda335d75e5",
    "title": "Banho Especial para Seu Pet!",
    "content": "Dê ao seu pet o cuidado que ele merece! Nosso serviço de banho inclui higienização completa com produtos específicos para cada tipo de pelagem, além de muito carinho e atenção. Seu companheiro sairá limpo, cheiroso e feliz! Agende agora e traga seu pet para um momento de bem-estar e conforto.",
    "comments": [
        {
            "name": "Antonella Rafaela Luana Castro",
            "comment": "Que incrível! É maravilhoso ver o carinho e cuidado que vocês têm com os pets. Com certeza vou agendar um banho para o meu companheiro de quatro patas!",
            "_id": "675b6e2c056aabda335d75e5"
        }
    ],
    "__v": 0
}
```

</details>

<details>
  <summary>POST /api/v1/post/createComment - Endpoint responsável por criar um comentário do proprietário ao post do petshop</summary>

#### **Parâmetros da Requisição**

| **Tipo** | **Parâmetro** | **Descrição**      | **Obrigatório** |
| -------- | ------------- | ------------------ | --------------- |
| body     | `_id`         | ID do post         | Sim             |
| body     | `name`        | Título do post     | Sim             |
| body     | `comment`     | Comentário do post | Sim             |

#### **Respostas da Requisição**

| **Código** | **Status**  | **Descrição**                                               |
| ---------- | ----------- | ----------------------------------------------------------- |
| 201        | Created     | O comentário do proprietário foi criado ao post com sucesso |
| 400        | Bad Request | Houve um erro ao criar o comentário do proprietário ao post |

#### **Resposta 201 do endpoint**

```json
{
    "_id": "675b6e2c056aabda335d75e5",
    "title": "Banho Especial para Seu Pet!",
    "content": "Dê ao seu pet o cuidado que ele merece! Nosso serviço de banho inclui higienização completa com produtos específicos para cada tipo de pelagem, além de muito carinho e atenção. Seu companheiro sairá limpo, cheiroso e feliz! Agende agora e traga seu pet para um momento de bem-estar e conforto.",
    "comments": [
        {
            "name": "Antonella Rafaela Luana Castro",
            "comment": "Que incrível! É maravilhoso ver o carinho e cuidado que vocês têm com os pets. Com certeza vou agendar um banho para o meu companheiro de quatro patas!",
            "_id": "675b6e2c056aabda335d75e5"
        }
    ],
    "__v": 0
}
```

</details>
