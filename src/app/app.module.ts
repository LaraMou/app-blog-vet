
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
// NGRX (REDUX)
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Module
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'primeng/chart';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularEditorModule } from '@kolkov/angular-editor';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';
import { JoinPipe } from './pipes/join.pipe';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Directives
import { HighligthDirective } from './directives/highligth.directive';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticsComponent } from './components/dashboard/widget/widget-stadistics/widget-stadistics.component';
import { WidgetLastCommentsComponent } from './components/dashboard/widget/widget-last-comments/widget-last-comments.component'
import { WidgetLastVisitsComponent } from './components/dashboard/widget/widget-last-visits/widget-last-visits.component';
import { AddCategoryComponent } from './components/dashboard/categories/add-category/add-category.component';
import { AddPostComponent } from './components/dashboard/posts/add-post/add-post.component';
import { WidgetSelectCategoryComponent } from './components/dashboard/widget/widget-select-category/widget-select-category.component';
import { WidgetUploadThumbnailComponent } from './components/dashboard/widget/widget-upload-thumbnail/widget-upload-thumbnail.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MessageComponent } from './components/dashboard/message/message.component';
import { ReceivedComponent } from './components/dashboard/received/received.component';
import { RootReducer } from './store/reducers/rootReducer';


export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}


const firebaseConfig = {
  apiKey: "AIzaSyBlNrlWi_yWDlqzKaL3Q2bw-QBt07MoZdE",
  authDomain: "blog-app-30f53.firebaseapp.com",
  databaseURL: "https://blog-app-30f53-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-30f53",
  storageBucket: "blog-app-30f53.appspot.com",
  messagingSenderId: "15769386117",
  appId: "1:15769386117:web:7d32da669882aea1fcfdec",
  measurementId: "G-SV48ZE3KZL"

};

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    SidebarComponent,
    DashboardComponent,
    CategoriesComponent,
    PostsComponent,
    ResumeComponent,
    WidgetComponent,
    WidgetStadisticsComponent,
    WidgetLastCommentsComponent,
    WidgetLastVisitsComponent,
    AddCategoryComponent,
    HighligthDirective,
    AddPostComponent,
    WidgetSelectCategoryComponent,
    WidgetUploadThumbnailComponent,
    JoinPipe,
    LoginComponent,
    MessageComponent,
    ReceivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ChartModule,
    FormsModule,
    NgbModule,
    TableModule,
    CheckboxModule,
    AngularEditorModule,
    AngularFireStorageModule,
    AngularFireAuthModule,


    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 10, // Especificamos el número de acciones que se persisten en el tiempo
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
