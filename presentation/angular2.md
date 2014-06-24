# Objetivos: #

### Mobile first ###

Se você fizer isso direito no celular, se você enfrentar os tempos de carregamento, desempenho e outros desafios móveis em primeiro lugar, em seguida, área de trabalho torna-se uma tarefa muito mais fácil.

### Modularização do framework ###

Visando desempenho e mais contribuição da comunidade, o core resolveu distribuir o framework em pequenos components, possibilitando assim que modulos como angular ui, angular router, restangular, etc possam ser opções para substituição de modulos anteriormente nativos.

### Simplicidade / Metadata ###

Simplificar o codigo e padronizar de acordo com especificações é um dos objetivos da proxima versão, para isso serão utilizadas Anotations e o ES6 para "esconder" estruturas relacionadas ao angular e deixar com o programador apenas o trabalho de escrever linhas de código relacionadas ao seu negocio.




# Features: #

### Change Detection ###

A proposta dessa feature é simular a futura implementação nativa Object.observe(), que por sua vez é uma API de baixo nivel que permite a adição de um ouvinte para notificação quando um objeto JS muda de estado.

### Dependency Injection ###

O protótipo de uma nova implementação de Dependency Injection tem crescido numa biblioteca (di.js) e já está pronto para ser testado. Elee é baseado em ES6 e tenta fornecer um sintaxe menos complexa, anotações declarativas e lazy loading.

### Templating ###

Os objetivos deste esforço é de simplificar a API de Diretivas, para permitir uma melhor utilização depadrões web, melhorar o desempenho e melhorar a API.

### Persistance ###

Essa feature ainda está em fase de discussão, pois existem varios detalhes como plataforma, desempenho, limite de armazenamento, etc. que se conflitam e impactam na decisão do core do angular, mas podemos esperar por coisas semelhantes a ngWebSockets, ngStore, ngData, ngHTTP, etc.

### Routing ###

O objetivo desta feature será de cobrir necessidades já comprovadas para com o atual sistema de rotas como rotas aninhadas, sibilings, estado baseado em views, etc.

### Logging ###


### Annotations ###
### Documentation ###
### Benchmarking ###
### Touch/Animations ###
### Package Repository ###
### Reference App ###
### Scaffolding ###
### Build/Deploy. ###