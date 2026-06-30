# Projeto: Streamers de Xadres 

Este projeto vai ser uma listagem de streamers que estão fazendo live de xadres do site chess.com.
Exibindo em listagem os streamers mostrando todas as informações do tal streamer.

## Aspectos Tecnicos

Este projeto vai ser feito em REACT + VITE usando useState e useEffect como alvo principal de produção.

## Informações de API

a api usada será: https://api.chess.com/pub/streamers

Esse é o exemplo da resposta:

{
    "streamers": [
    {
      "username": "Blitzstream",
      "avatar": "https://images.chesscomfiles.com/uploads/v1/user/5900291.12eedc49.50x50o.b72625e4d3c3.jpg",
      "twitch_url": "https://twitch.tv/blitzstream",
      "url": "https://www.chess.com/member/Blitzstream",
      "is_live": true,
      "is_community_streamer": false,
      "platforms": [
        {
          "type": "twitch",
          "stream_url": "https://twitch.tv/blitzstream",
          "channel_url": "https://twitch.tv/blitzstream",
          "is_live": true,
          "is_main_live_platform": true
        }
      ]
    }]
}

Informações que precisamos:
-username
-avatar
-twitch_url (pode ser outro provedor, mas o nome não muda)
-url (url da plataforma)
-is_live (se caso estiver em live, temos que ter um sinal)

## Aspectos Visuais

Header:
    -Nome Streamers-chess com fonte grande e centralizado com estilo minimalista

Area principal:
    Conteudo centralizado em container  
    Conteudo separado em colunas (recomendavel uso de grid-cols-3 ou 4)
    Caso passe do limite da tela, coloque paginação
    Cards:
        -cor mais clara que o backround
        -cantos arredondados 
        - informações em coluna com a imagem à esquerda
        -componente reútilizavel para map().
        -caso streamer esteja offline, coloque o card como todo cinza parecendo realmente offline

Desgin geral:
    -O Projeto terá um fundo cinza escuro
    -Fonte inter do google fonts





