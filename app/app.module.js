System.register(["@angular/platform-browser", "@angular/core", "@angular/http", "./common/pageNotFound.module", "./toDo/components/toDo.component", "./toDo/components/lists.component", "./toDo/components/tasks.component", "./toDo/services/appService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_1, core_1, http_1, pageNotFound_module_1, toDo_component_1, lists_component_1, tasks_component_1, appService_1;
    var AppModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (pageNotFound_module_1_1) {
                pageNotFound_module_1 = pageNotFound_module_1_1;
            },
            function (toDo_component_1_1) {
                toDo_component_1 = toDo_component_1_1;
            },
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            },
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (appService_1_1) {
                appService_1 = appService_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, pageNotFound_module_1.PageNotFoundModule],
                        declarations: [toDo_component_1.ToDoComponent, lists_component_1.ListComponent, tasks_component_1.TaskComponent],
                        providers: [appService_1.AppService],
                        bootstrap: [toDo_component_1.ToDoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map