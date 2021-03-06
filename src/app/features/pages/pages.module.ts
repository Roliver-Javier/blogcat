import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../../shared/shared.module';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { FeaturesComponentsModule } from '../components/featuresComponents.module';
import { ReactionService } from '../../core/services/reaction.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChallengePageComponent } from './challenge/challenge.component';
import { PostService } from '../../core/services/post.service';
import { RecommendationService } from '@app/core/services/recommendation.service';
import { ContributorsService } from '@app/core/services/contributors.service';

const components = [
    HomeComponent,
    PostDetailComponent,
    PostDashboardComponent,
    PostListComponent,
    ChallengePageComponent
];

const providers = [
    PostService,
    ReactionService,
    RecommendationService,
    ContributorsService
];

@NgModule({
    imports:[ PagesRoutingModule, FlexLayoutModule, FeaturesComponentsModule,  SharedModule],
    exports:[components],
    declarations:[components],
    providers:[...providers]
})

export class PagesModule {}