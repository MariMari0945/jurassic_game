// Criação de variáveis
var plataformas
var dino
var teclado
var meteoro
var placar
var pontos = 0

// Definição da segunda cena
class Cena1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cena1' });
    }

    // Carrega os itens
    preload() {
        this.load.image('fundo01', '/assets/fundotela1.png')
        this.load.image('madeira', '/assets/madeira.png')
        this.load.spritesheet('dino', '/assets/dino.png', { frameWidth: 85, frameHeight: 100, });
        this.load.spritesheet('meteo', '/assets/meteoro.png', {frameWidth:598, frameHeight: 598})
        // Carregue os recursos do jogo, como sprites, imagens, sons, etc.
    }
    // Renderiza os itens e os cria 
    create() {
        teclado = this.input.keyboard.createCursorKeys()// Adiciona o teclado
        this.add.image(960, 540, 'fundo01');
        dino = this.physics.add.sprite(500, 100, 'dino').setScale(1.3);// Cria propriedade físicas para o dinossauro
        dino.setCollideWorldBounds(true)// Adiciona uma campo para colisão no dinossauro

       

        meteoro = this.physics.add.group()// Adiciona propriedade física à um grupo de meteoros
        meteoro.create(1000, 700, 'meteo').setScale(0.25)
        meteoro.create(500, 300, 'meteo').setScale(0.25)
        meteoro.create(200, 250, 'meteo').setScale(0.25)
        meteoro.create(650, 700, 'meteo').setScale(0.25)
        meteoro.create(400, 650, 'meteo').setScale(0.25)
        meteoro.create(300, 600, 'meteo').setScale(0.25)
        meteoro.create(900, 300, 'meteo').setScale(0.25)
        meteoro.create(800, 900, 'meteo').setScale(0.25)
        meteoro.create(1800, 850, 'meteo').setScale(0.25)
        meteoro.create(1300, 750, 'meteo').setScale(0.25)
         

        this.anims.create({// Adiciona animação parada ao dinossauro
            key: 'parado',
            frames: this.anims.generateFrameNumbers('dino', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1

        });

        this.anims.create({ // Adiciona animação de andar ao dinossauro
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dino', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1

        });

        dino.anims.play('parado', true);


        plataformas = this.physics.add.staticGroup();// Adiciona propriedade física às plataformas 
        plataformas.create(500, 300, 'madeira')
        plataformas.create(200, 250, 'madeira')
        plataformas.create(1000, 888, 'madeira')
        plataformas.create(650, 700, 'madeira')
        plataformas.create(400, 650, 'madeira')
        plataformas.create(300, 600, 'madeira')
        plataformas.create(900, 300, 'madeira')
        plataformas.create(800, 900, 'madeira')
        plataformas.create(1800, 850, 'madeira')
        plataformas.create(1300, 750, 'madeira')

        this.physics.add.collider(dino, plataformas) // Cria a colisão do dinossauro com as plataformas
        this.physics.add.collider(plataformas, meteoro) // Cria a colisão do dinossauro com os meteoros

        placar = this.add.text(100, 50, 'Meteoros', {fontSize: '30px',fill: '#000000'}) // Adiciona o placar para contagem dos meteoros
        this.physics.add.overlap(dino, meteoro.getChildren(), (dino, meteoro)=>{ //Adiciona ação para quando o dinossauro sobrepor o meteoro
            meteoro.disableBody(true, true)
            pontos +=1
            placar.setText('Meteoros ' + pontos)// Adiciona pontos a cada meteoro sobreposto
        })
        
    }

    // Lógica de atualização do jogos
    update() {

        if(teclado.left.isDown){ // Anda para a esquerda  
            dino.anims.play('walk', true)
            dino.setVelocityX(-300)
            dino.setFlip(false, false)

        }

        else if(teclado.right.isDown){ // Anda para a direita 
            dino.anims.play('walk', true)
            dino.setVelocityX(300)
            dino.setFlip(true, false)
        }
        else{ // Fica parado
            dino.setVelocityX(0)
            dino.anims.play('parado', true)
        }

        if(teclado.up.isDown){ // Pula
            dino.setVelocityY(-300)
            dino.anims.play('parado', true)
        }
    }
}

