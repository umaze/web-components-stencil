import {h, Component, Prop, State, Method} from '@stencil/core';

@Component({
    tag: 'um-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @State() showContactInfo = false;

    @Prop({reflect: true}) mainTitle: string;
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer() {
        this.opened = false;
    }

    onContentChange(content: string) {
        this.showContactInfo = content === 'contact';
    }

    @Method()
    open() {
        this.opened = true;
    }

    render() {
        let mainContent = <slot />;
        if (this.showContactInfo) {
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>You can contact us via phone or mail:</p>
                    <ul>
                        <li>Phone: 0049 199 112 443</li>
                        <li>E-Mail: <a href="something@somewhere.com">something@somewhere.com</a></li>
                    </ul>
                </div>
            );
        }
        return (
            <aside>
                <header>
                    <h1>{this.mainTitle}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button 
                        class={!this.showContactInfo ? 'active' : ''} 
                        onClick={this.onContentChange.bind(this, 'nav')}>Navigation
                    </button>
                    <button
                        class={this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'contact')}>Contact
                    </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        );
    }
}