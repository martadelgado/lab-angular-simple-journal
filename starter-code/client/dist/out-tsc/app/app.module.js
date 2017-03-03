var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { RouterModule } from "@angular/router";
import { RetrieverService } from './retriever.service';
import { AddEntryComponent } from './add-entry/add-entry.component';
export var routes = [
    { path: '', component: EntryListComponent },
    { path: 'journal-entries/:id', component: JournalDetailsComponent },
    { path: 'add-entry', component: AddEntryComponent },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            EntryListComponent,
            JournalDetailsComponent,
            AddEntryComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(routes)
        ],
        providers: [RetrieverService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map