import Control from 'ol/control/Control';

export class AnimateToExtentControl extends Control {
    public initialMapZoom: number = 0;
    constructor() {
        super({});
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'ol-extent-button';
        button.innerHTML = '<span class="material-icons">zoom_out_map</span>';
        button.title = 'Zoom to extent';
        const element = document.createElement('div');
        element.className = 'ol-control ol-extent';
        element.appendChild(button);
        Control.call(this, {
            element: element
        });
        button.addEventListener('click', () => this.click());
    }

    click() {
        this.getMap().getView().animate({ zoom: this.initialMapZoom, center: [0, 50], duration: 1500 })
    }

}