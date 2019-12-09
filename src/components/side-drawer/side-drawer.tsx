import {h, Component} from '@stencil/core';

@Component({
    tag: 'um-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    render() {
        return (
            <aside>
                <h1>The Side Drawer</h1>
            </aside>
        );
    }
}