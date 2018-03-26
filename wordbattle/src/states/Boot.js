import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config';

export default class extends Phaser.State {
    init() {
        if (!this.game.device.desktop) {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.minWidth = 300;
            this.game.scale.minHeight = 100;
            this.game.scale.maxWidth = window.innerWidth * 2;
            this.game.scale.maxHeight = window.innerHeight * 2;
        }

        this.scale.pageAlignHorizontally = false;
        this.scale.pageAlignVertically = true;

        this.scale.forceOrientation(true, false);
        this.scale.refresh(true);
    }

    preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.maxHeight = window.innerHeight;
        this.game.scale.maxWidth = window.innerHeight * (this.game.world.width/ this.game.world.height);
        // let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
        // text.anchor.setTo(0.5, 0.5)
        console.log('starting')
        this.load.image('loaderBg', './assets/images/logobackground.png')
        this.load.image('loaderBar', './assets/images/loading-logo.png')

        let scale_ratio;
        let canvas_height_max = 900;
        let canvas_width_max = 1140;
        let width = game.width;//window.screen.availWidth * window.devicePixelRatio
        let height = game.height;//window.screen.availHeight * window.devicePixelRatio
        game.aspectRatio = width / height;
        game.scaleRatio = game.width / canvas_width_max;

        console.log('game dimension: ', game.width, 'x', game.height, 'height * scaleRatio', game.height * game.scaleRatio)
        if (game.aspectRatio < 1) {
            //game.scaleRatio = width / canvas_height_max
            // console.log(game.width, game.height)
            game.scale.setGameSize(game.width, game.height * game.scaleRatio)
        } else {
            game.scale.setGameSize(game.width, game.height)
        }

        game.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
    }

    render() {
        // if (config.webfonts.length && this.fontsReady) {
        //   this.state.start('Splash')
        // }
        // if (!config.webfonts.length) {
        //   this.state.start('Splash')
        // }
        this.state.start('Splash')
    }
}
