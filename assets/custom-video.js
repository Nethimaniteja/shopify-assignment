if (!customElements.get("custom-video")) {
    class CustomVideo extends HTMLElement{
        constructor(){
            super();
            this.playButton = this.querySelector('.custom-video__play-button');
            this.videoPopup = this.querySelector('.custom-video__iframe-container');
            this.video = this.querySelector('.js-youtube');
            this.closeButton = this.querySelector('.custom-close__svg-wrapper');
        }

        connectedCallback(){
            this.playButton.addEventListener('click', () => {
                this.videoPopup.classList.remove('hidden');
                this.video.setAttribute('src', this.video.getAttribute('src') + '&autoplay=1');
            });
            this.closeButton.addEventListener('click', () => {
                this.videoPopup.classList.add('hidden');
                this.video.setAttribute('src', this.video.getAttribute('src').replace('&autoplay=1', ''));
            });
        }
    }

    customElements.define("custom-video",CustomVideo);
}