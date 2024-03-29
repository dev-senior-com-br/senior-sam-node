# SDK Descontinuada!

Caso julgue necessário o uso de uma SDK, sugerimos a utilização de geradores código a partir do swagger de cada API via ferramenta https://editor.swagger.io/ (Opção Generate Client)

<hr />
<strike>
# Senior API SDK para Node.js

Esta biblioteca permite desenvolvedores criar integrações com API SAM da Senior. 
Você pode ler a documentação completa:
 [Dependent](https://dev.senior.com.br/apis/hcm_dependent/)
 [Recruitment](https://dev.senior.com.br/apis/hcm_recruitment/)
 [Payroll](https://dev.senior.com.br/apis/hcm_payroll/)
 
## Versão suportada do Node.js

A SDK suporta o Node.js na versão 10 ou superior.
 
## Instalação
```
npm i @seniorsistemas/senior-sam --save
```

## Ambiente
Atualmente o ambiente padrão para o desenvolvimento é o da Homologx.
Para fazer a troca do ambiente basta chamar o metodo `setEnvironment` ou `setUrl` caso queira passar uma url da plataforma diferente das configuradas:

```javascript
export enum ENVIRONMENTS {
  DEV = 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0',
  PROD = 'https://api.senior.com.br',
}
```

Guia para mudar ambiente na seção [Iniciando a utilização](#iniciando-a-utilização).

### Configurações
Os comando abaixo permitem configuração de proxy:
 - npm config set proxy <ALTERAR_PARA_PROXY_HTTP>
 - npm config set https-proxy <ALTERAR_PARA_PROXY_HTTPS>

_Criar arquivo *.env* na raíz do projeto_

#### _Adicionar ao arquivo as seguintes propriedades_ 
```text
 SENIOR_USERNAME = <NOME_DO_USUARIO>
 PASS = <SENHA_DO_USUARIO>
 TENANT_NAME = <NOME_DO_TENANT>
```

### Iniciando a utilização

Primeiro você precisa criar um arquivo `.js`, como por exemplo: `lobby.js`, e nele requerer a biblioteca.

```javascript
var { SAMApi } = require('@seniorsistemas/senior-sam');
```

Então você precisa criar instância informando usuário e senha.

```javascript
var api = new SAMApi(username, password);
```

Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
```

### Exemplos
Na pasta [examples](https://github.com/dev-senior-com-br/senior-sam-node/tree/develop/examples) você encontrar alguns exemplos.
Para executa-los, basta rodar o comando abaixo com o nome do arquivo (substituir a chave <nome_arquivo>).
```
node examples/<nome_arquivo>.js
``` 

Para rodar arquivos `.ts` é necessário instalar o pacote `ts-node` globalmente (`npm i -g ts-node`) e executar o exemplo conforme abaixo.

```
ts-node examples/<nome_arquivo>.ts
```

Alguns exemplos necessitam de propriedades específicas, descritas no inicio dos arquivos. Para configurar basta criar um arquivo no root do projeto chamado `.env` contendo chave=valor para cada variavel de ambiente que o exemplo necessita.
Exemplo:
No arquivo `examples/lobby.js` usamos a variavel de ambiente: `process.env.SENIOR_USERNAME`, sendo assim no arquivo `.env` você vai colocar o seguinte:
```
SENIOR_USERNAME=<seu_usuario_da_plataforma>
PASS=<seu_password_da_plataforma>
```

Essa configuração é igual ao colocar variáveis de ambiente, o `.env` é só um falicitador para o node.
=======
#### Exemplos implementados

- [Lobby](examples/lobby-example.js)

Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
```

### Links
* [Documentação da API](https://dev.senior.com.br/api/platform/)

### Entidades

Para utilizar as entidades é necessário chamar o metódo `getEntity` da api passando por parâmetro o domínio, serviço e a entidade.

```javascript
const entity: Entity<Vacancy> = api.getEntity("hcm", "recruitment", "vacancy");
entity.get().then(resp => console.log(resp.body));

// Caso seja necessário utilizar a classe de filtro
String filter = new FilterBuilder().field("id").equals("60B3957C72C44E00A9739451B07265C3").build();
// O mesmo terá como retorno o seguinte : ?filter=id eq '60B3957C72C44E00A9739451B07265C3'
```

## Obtendo versão de distribuição
Última versão disponível em [https://www.npmjs.com/package/@seniorsistemas/senior-sam](https://www.npmjs.com/package/@seniorsistemas/senior-sam)

## [Guia de contribuição](https://dev.senior.com.br/guia-de-contribuicao/)

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-sam-node/issues](https://github.com/dev-senior-com-br/senior-sam-node/issues)

## License

Copyright © 2020.
</strike>
