# Back-end do Sistema ERP
a criação desse sistema foi idealizada para ajudar a gestão de pequenas empresas, podendo ter cadastro de clientes/funcionários e de produtos, podendo atualizar o numero de vendas e ver sua receita/lucro em tempo real.

# Divisão do back-end

Na pasta "SRC" está dividida em controllers e models

Em controllers, pensando em organizar o  código, dividi ele pensando em um padrão MVC, pondo a lógica de como fazer a integração  com o banco de dados e de como cada objeto irá se comportar.

Em models, criei um esquema de como os dados seriam criados e manipulados futuramente.

Em routes, criei as rotas da api. Separando em rodas de usuários e rotas para produtos. (Criação da API)

Em index fiz a conexão com o MongoDB e a criação do servidor local.
