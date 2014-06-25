> O que é AngularJS

Angular em poucas palavras é um framework para aplicações dinâmicas que te permite de certa forma extender a sintaxe HTML de acordo com sua aplicação, aplicar conceitos como o two way data binding, injeção de dependências e componentização de sua aplicação de forma simples e objetiva.

> Extender o HTML

Angular auxilia na criação de tags customizadas, na criação de atributos que podem alterar o comportamento de elementos existentes do HTML e isso é definido como uma forma de se extender o HTML, ou seja, o angular possibilita que você de certa forma "tunê" o interpretador do seu browser.

> Two way data bind

Este conceito nada mais é do que uma ligação sincrona e automatica de dados entre componentes.

Por exemplo, quando você define um input com o atributo ng-model e valor test, automagicamente é criado uma variavel e tudo que é alterado nessa variavel é refletido nas referências dessa variavel.

Esse sem dúvidas é um dos conceitos mais interessantes e que dá mais poder ao AngularJS

> Components Based

Angular trás consigo padrões web para desenvolvimento de components como também, aplica "extras" a esses padrões, a principal forma de se aplicar esse padrão dentro de sua aplicação AngularJS é utilizando-se das famosas Diretivas.

# Conceitos

> Directives

Diretivas são marcadores de um comportamento no DOM, seja como atributo, comentário, tag ou classe css. Angular já vem com um conjunto bem grande de diretivas, mas também é possivel criar nossas proprias diretivas, como já fazemos com controllers e serviços.

> ngApp

Esta diretiva serve de bootstrap para sua aplicação Angular, ela definirá o elemento raiz da sua aplicação. Geralmente é colocada no body ou html

> ngModel

Essa diretiva é especifica para elementos de entrada, seja elementos de form ou contentEditable, ela basicamente liga esse elemento de entrada com uma propriedade em escopo de controle e é novamente exposta para essa diretiva, criando assim o fluxo do Two-way data-binding

> ngController

Essa diretiva basicamente atribui uma região dentro da sua aplicação que será manipulada por um controlador, esse é um aspecto fundamental de como o Angular acopla consigo os padrões MVC

> ngRepeat

A diretiva ngRepeat instacia um model por vez por item de uma determinada coleção e cada instância gerada recebe seu proprio "escopo" de runtime.

> ngClick

Essa diretiva simples e direta, atrela o elemento onde ela é referênciada com o evento de click a ser observado.

> ngSrc

Esta diretiva em especifico vem para solucionar um problema de timing de load, onde o browser renderiza e busca os sources e obviamente não vai encontrar a referência do hash nas imagens.

> Custom Directives

Sim, você pode sair da caixa tranquilamente do angular e utilizar o que ele tem de melhor em diretivas customizadas, logo isso significa que você mesmo poderá desenvolver suas proprias diretivas atravês de uma API, semelhante ao que você faz com controllers e serviços.


# Services, Providers e Factories

Factories
Factory é o tipo mais comun de serviço usado. É também muito fácil de entender. Uma factory é um serviço que pode retornar qualquer tipo de dado. Não há uma maneira definida de como você pode criar estes dados, você somente precisa retornar algo.


Services
O tipo de serviços service trabalha muito parecido com a maneira que uma factory trabalha. A diferença é que um service recebe um construtor, então quando você usa ele pela primeira vez, você precisa fazer um new Foo(); para instanciar o objeto. Mantenha em mente que ele irá retornar o mesmo objeto se você usar o serviço novamente em outro lugar.


Provider
Um provider espera uma função $get que será o que nós injetaremos dentro das outras partes da nossa aplicação. Então quando nós injetamos foo dentro de um controller, o que nós injetamos é uma função $get.
Porque nós devemos usar este forma quando uma factory é mais simples? Porque podemos configurar um provider em uma função config.


> $http

Este serviço centraliza a comunicação entre servidores e o client via HTTP, utilizando-se do objeto XMLHttpRequest ou atravês de JSONP

> $location

Este serviço analisa a URL do navegador com base no window.location e atualiza a url dentro da sua aplicação, isso é muito util pois geralmente lidamos com Single Page Applications

> $log

Este simples serviço implementa com segurança mensagens de log para o navegador, quando houver suporte.

> $timeout

Invólcro da função window.setTimeout.

> $animate

Este serviço é muito interessante, pois fornece funções para manipulação do DOM, como inserir, remover e/ou mover elementos, bem como adicionar e remover classes css. Este é o serviço utilizado pela diretiva ngAnimate, que fornece ganchos bem interessantes para animação de alto nível com CSS e JAvascript.

# Filters

> filter

Este filtro seleciona uma lista e retorna uma nova matriz de acordo com parametros previamente definidos de filtragem

> number

Formata um texto como numeral

> order

Este filtro é bem legal, pois possibilita ordenar um array de acordo com sua posição na matriz, ou seja, é extremamente essencial quando existe a necessidade de ordenar dados tabulados.


# Routing

> ngRoute

Esse módulo habilita o roteamento de URL da sua aplicação, ele suporta atualmente hashbang e HTML5 pushState

> $routeParams

Esse serviço é utilizado quando é necessário resgatar query params na URL

> $route

Esse serviço é utilizado para saber detalhes da rota que está sendo acessada, como o template, params e nome do controller da mesma

> $routeProvider

Esse serviço é utilizado para registrar todas as rotas da Aplicação

> ngView

Essa diretiva ira chamar o template da rota atual dentro da página


# $scope

Esse é um objeto especial dentro de qualquer aplicação Angular,  e ele é destinado a permitir uma comunicação entre a view e o controller, ou seja, todas as variaveis disponiveis na camada View poderão ser acessadas no controle atravês deste objeto.

# ngResources

O módulo ngResources é interessante, pois através dele podemos consultar APIs REST de forma limpa e padrão.

# ngCookies

Este módulo também é muito interessante, pois auxilia o gerenciamento de cookies de sua aplicação e de uma maneira bem simplificada.

# Angular 2.0

> Mobile first

Se você fizer isso direito no celular, se você enfrentar os tempos de carregamento, desempenho e outros desafios móveis em primeiro lugar, em seguida, área de trabalho torna-se uma tarefa muito mais fácil.

> Modularização do framework

Visando desempenho e mais contribuição da comunidade, o core resolveu distribuir o framework em pequenos components, possibilitando assim que modulos como angular ui, angular router, restangular, etc possam ser opções para substituição de modulos anteriormente nativos.

> Simplicidade / Metadata

Simplificar o codigo e padronizar de acordo com especificações é um dos objetivos da proxima versão, para isso serão utilizadas Anotations e o ES6 para "esconder" estruturas relacionadas ao angular e deixar com o programador apenas o trabalho de escrever linhas de código relacionadas ao seu negocio.

> Change Detection

A proposta dessa feature é simular a futura implementação nativa Object.observe(), que por sua vez é uma API de baixo nivel que permite a adição de um ouvinte para notificação quando um objeto JS muda de estado.

> Dependency Injection

O protótipo de uma nova implementação de Dependency Injection tem crescido numa biblioteca (di.js) e já está pronto para ser testado. Elee é baseado em ES6 e tenta fornecer um sintaxe menos complexa, anotações declarativas e lazy loading.

> Templating

Os objetivos deste esforço é de simplificar a API de Diretivas, para permitir uma melhor utilização depadrões web, melhorar o desempenho e melhorar a API.

> Persistance

Essa feature ainda está em fase de discussão, pois existem varios detalhes como plataforma, desempenho, limite de armazenamento, etc. que se conflitam e impactam na decisão do core do angular, mas podemos esperar por coisas semelhantes a ngWebSockets, ngStore, ngData, ngHTTP, etc.

> Routing

O objetivo desta feature será de cobrir necessidades já comprovadas para com o atual sistema de rotas como rotas aninhadas, sibilings, estado baseado em views, etc.

> Logging

Esta feature abre uma nova camada no que se diz respeito a debug com angular. Possibilitando criar uma stacktrace para os modulos plugaveis do angular.

> Annotations

Esta feature fornece ferramentas para se escrever de forma mais declarativa, possibilitando ao desenvolvedor entender o que está acontecendo

> Reference App

Será um bonus realizado pelos criadores para se definir uma convenção com boas práticas para desenvolvimento. Também servirá para demonstrar uma aplicação de larga escala com angular.


> Scaffolding

A equipe irá adotar um sistema padrão de scaffolding e até o momento opta por ngTailor ou Yeoman para gerir o pacote de ferramentas e componentes para desenvolver aplicações

> Build/Deploy.