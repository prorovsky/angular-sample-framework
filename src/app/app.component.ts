import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private frameworkConfigService: FrameworkConfigService) {
        const config: FrameworkConfigSettings = {
            socialIcons: [
                { imageFile: 'assets/social-fb-bw.jpg', alt: 'Facebook', link: 'https://www.facebook.com'},
                { imageFile: 'assets/social-google-bw.jpg', alt: 'Google +', link: 'https://www.google.com'},
                { imageFile: 'assets/social-twitter-bw.jpg', alt: 'Twitter', link: 'https://www.twitter.com'}
            ],
            showLanguageSelector: true,
            showUserControls: true,
            showStatusBar: true,
            showStatusBarBreakpoint: 800
        };

        frameworkConfigService.configure(config);
    }

}
