import {h, Component, Prop} from '@stencil/core';

@Component({
    tag: 'um-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @Prop({reflect: true}) mainTitle: string;
    @Prop({reflect: true, mutable: true}) open: boolean;

    onCloseDrawer() {
        this.open = false;
    }

    render() {
        return (
            <aside>
                <header>
                    <h1>{this.mainTitle}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <main>
                    <slot />
                </main>
            </aside>
        );
    }
}