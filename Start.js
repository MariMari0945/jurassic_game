class Abertura extends Phaser.Scene { // Cria uma classe para a primeira cena
    constructor() {
        super({ key: 'Abertura' });
    }
    // Carrega os itens
    preload() {
        this.load.image('fundo', '/assets/FUNDOabertura.png')
        this.load.image('jogar', '/assets/jogarbotao.png')
        // Carregue os recursos do jogo, como sprites, imagens, sons, etc.
    }
    // Renderiza os itens e os cria 
    create() {
        this.add.image(960, 540, 'fundo')
        let jogar = this.add.image (960,540, 'jogar').setScale(0.7) // Cria a variável jogar

        jogar.setInteractive() // Adiciona interação ao clicar no botão criado
        jogar.on('pointerdown', () => {
            this.scene.stop();
            this.scene.start('Cena1')// Ao clicar, leva para o próximo cenário
        })
    }
}

