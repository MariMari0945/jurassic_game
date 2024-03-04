const config = {// Cria a variável config para os detalhes específicos
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false
        }
    },

    scene: [Abertura, Cena1]// Adiciona os dois cenários que serão seguidos
};

var game = new Phaser.Game(config);// Cria a variável para jogo no phaser
