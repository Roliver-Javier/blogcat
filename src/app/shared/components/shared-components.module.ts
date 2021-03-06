import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { PostAvatarComponent } from './post-avatar/post-avatar.component';
import { MaterialModule } from '../../material.module';
import { FooterComponent } from './footer/footer.component';
import { PagesRoutingModule } from '../../features/pages/pages.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

const importsAndExports = [
    HeaderComponent, 
    FooterComponent,
    CardComponent,
    NavbarComponent,
    LikeButtonComponent,
    ShareButtonComponent,
    PostAvatarComponent,
];

@NgModule({
    imports:[MaterialModule,FlexLayoutModule, PagesRoutingModule],
    exports: [...importsAndExports],
    declarations:[...importsAndExports]
})

export class SharedComponentsModule{}