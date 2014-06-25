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