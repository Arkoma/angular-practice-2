import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './shopping-list/list/list.component';
import { EditListComponent } from './shopping-list/edit-list/edit-list.component';
import {RecipeListComponent} from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    EditListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
    imports: [
      BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
