System.register(["@angular/router", "./toDo/components/toDo.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, toDo_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toDo_component_1_1) {
                toDo_component_1 = toDo_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', redirectTo: '/toDo', pathMatch: 'full' },
                { path: 'toDo', component: toDo_component_1.ToDoComponent },
                { path: '**', loadChildren: 'app/common/pageNotFound.module#PageNotFoundComponent' },
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map