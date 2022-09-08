function examplePlugin(options) {

    this.on('playing', function() {
        videojs.log('playback began!');
        const chat = document.querySelector('.chat')
        chat.classList.add('chat--open')
    });

    // this.on('pause', function() {
    //     videojs.log('Пауза');
    // });
}

videojs.registerPlugin('examplePlugin', examplePlugin);
let video = videojs(document.querySelector('.video-js'));
video.examplePlugin()