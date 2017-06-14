import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {PageNotFoundModule} from "./common/pageNotFound.module";
import {ToDoComponent} from "./toDo/components/toDo.component";
import {ListComponent} from "./toDo/components/lists.component";
import {TaskComponent} from "./toDo/components/tasks.component";
import {AppService} from "./toDo/services/appService";


@NgModule({
        imports: [BrowserModule, HttpModule, PageNotFoundModule],
        declarations: [ToDoComponent, ListComponent, TaskComponent],
        providers: [AppService],
        bootstrap: [ToDoComponent]
    }
)
export class AppModule {
}