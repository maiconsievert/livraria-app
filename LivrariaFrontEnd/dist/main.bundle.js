webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"teal lighten-2\">\r\n    <div class=\"nav-wrapper\">\r\n        <a href=\"#!\" class=\"brand-logo\"> Livraria</a>\r\n        \r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n\r\n    \r\n\r\n\r\n    <div class=\"row\">\r\n        <livros></livros>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_Http__ = __webpack_require__("./node_modules/@angular/Http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_livros_component__ = __webpack_require__("./src/app/components/livros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_livros_services__ = __webpack_require__("./src/app/services/livros.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_livros_component__["a" /* LivrosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_Http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["MaterializeModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_livros_services__["a" /* LivrosServices */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/livros.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"livros\">\r\n    \r\n    <h5 [class.hidden]=\"modoEditar\" class=\"teal-text text-lighten-2\">Livros em estoque</h5>\r\n    \r\n    \r\n    <table [class.hidden]=\"modoEditar\">\r\n        <thead>\r\n            <tr>\r\n                <th>Título</th>\r\n                <th>Autor</th>\r\n                <th>Estoque</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n            <tr *ngFor=\"let livro of livros\">\r\n            <td>{{livro.Nome}}</td>\r\n            <td>{{livro.Autor}}</td>\r\n            <td>{{livro.Quantidade}}</td>\r\n            <td>\r\n                <a href=\"#!\" (click)=\"editar(livro)\" materialize=\"tooltip\" class=\"tooltipped\" data-tooltip=\"Editar\">\r\n                           <i class=\"material-icons teal-text text-lighten-2\">mode_edit</i>\r\n                        </a>\r\n            </td>\r\n            <td>\r\n                    <a href=\"#!\" (click)=\"excluir(livro._id)\" materialize=\"tooltip\" class=\"tooltipped\" data-tooltip=\"Excluir\">\r\n                            <i class=\"material-icons red-text text-red-2\">delete</i>\r\n                        </a>\r\n            </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n        \r\n    <br />\r\n\r\n    <h5 [class.hidden]=\"modoEditar\" class=\"teal-text text-lighten-2\">Adicionar Livro</h5>\r\n    <h5 [class.hidden]=\"!modoEditar\" class=\"teal-text text-lighten-2\">Editar Livro</h5>\r\n\r\n    <div class=\"row\">\r\n        <form #form=\"ngForm\" class=\"col s12\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input placeholder=\"\" id=\"nome\" name=\"nome\" [(ngModel)]=\"itemEditarAtual.Nome\" type=\"text\" class=\"validate form-control\" required minlength=\"3\" #name=\"ngModel\">\r\n                    <label for=\"nome\">Título</label>\r\n\r\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"name.errors.required\">\r\n                            Título é obrigatório.\r\n                        </div>\r\n                        <div *ngIf=\"name.errors.minlength\">\r\n                            O título precisa ter ao menos 3 caracteres.\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input placeholder=\"\" id=\"autor\" name=\"autor\" [(ngModel)]=\"itemEditarAtual.Autor\" type=\"text\" class=\"validate\" class=\"validate form-control\" required minlength=\"3\" #autor=\"ngModel\">\r\n                    <label for=\"autor\">Autor</label>\r\n                    <div *ngIf=\"autor.invalid && (autor.dirty || autor.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"autor.errors.required\">\r\n                            Autor é obrigatório.\r\n                        </div>\r\n                        <div *ngIf=\"autor.errors.minlength\">\r\n                            O autor precisa ter ao menos 3 caracteres.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input placeholder=\"\" id=\"quantidade\" type=\"number\" name=\"quantidade\" [(ngModel)]=\"itemEditarAtual.Quantidade\" class=\"validate form-control\" required minlength=\"1\" #quantidade=\"ngModel\">\r\n                    <label for=\"quantidade\">Quantidade em estoque</label>\r\n                    <div *ngIf=\"quantidade.invalid && (autor.dirty || autor.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"quantidade.errors.required\">\r\n                                É necessário informar a quantidade no estoque\r\n                            </div>\r\n                            <div *ngIf=\"quantidade.errors.minlength\">\r\n                                Valor de estoque inválido\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <select id=\"idioma\" materialize=\"material_select\" name=\"idioma\" [(ngModel)]=\"itemEditarAtual.Idioma\">\r\n                        <option value=\"\" disabled selected>Escolha o idioma</option>\r\n                        <option value=\"Português\">Português</option>\r\n                        <option value=\"Inglês\">Inglês</option>\r\n                        <option value=\"Alemão\">Alemão</option>\r\n                        <option value=\"Espanhol\">Espanhol</option>\r\n                    </select>\r\n                    <label>Idioma</label>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n                \r\n                <div class=\"input-field col s4\">\r\n                    <input placeholder=\"\" id=\"paginas\" type=\"text\" class=\"validate\" name=\"paginas\" [(ngModel)]=\"itemEditarAtual.Paginas\">\r\n                    <label for=\"paginas\">Páginas</label>\r\n                </div>\r\n                <div class=\"input-field col s4\">\r\n                    <input placeholder=\"\" id=\"isbn\" type=\"text\" class=\"validate\" name=\"isbn\" [(ngModel)]=\"itemEditarAtual.Isbn\">\r\n                    <label for=\"isbn\">ISBN</label>\r\n                </div>\r\n                <div class=\"input-field col s4\">\r\n                    <input placeholder=\"\" id=\"acabamento\" type=\"text\" class=\"validate\" name=\"acabamento\" [(ngModel)]=\"itemEditarAtual.Acabamento\">\r\n                    <label for=\"acabamento\">Acabamento</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <button [disabled]=\"form.invalid\" href=\"#!\" class=\"waves-effect waves-light btn\" (click)=\"salvar()\">Salvar</button>\r\n\r\n                    <button href=\"#!\" class=\"waves-effect waves-light btn\" (click)=\"cancelar()\">Cancelar</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/livros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_livros_services__ = __webpack_require__("./src/app/services/livros.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_livros__ = __webpack_require__("./src/app/models/livros.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LivrosComponent = /** @class */ (function () {
    function LivrosComponent(service) {
        this.service = service;
        this.livros = [];
        this.modoEditar = false;
        this.tituloLabel = "Adicionar";
        this.itemEditarAtual = new __WEBPACK_IMPORTED_MODULE_2__models_livros__["a" /* Livros */]();
    }
    LivrosComponent.prototype.inicio = function () {
        this.itemEditarAtual = new __WEBPACK_IMPORTED_MODULE_2__models_livros__["a" /* Livros */]();
        this.modoEditar = false;
        this.form.reset();
    };
    LivrosComponent.prototype.editar = function (livro) {
        this.itemEditarAtual = livro;
        this.modoEditar = true;
        this.tituloLabel = "Editar";
    };
    LivrosComponent.prototype.cancelar = function () {
        this.itemEditarAtual = new __WEBPACK_IMPORTED_MODULE_2__models_livros__["a" /* Livros */]();
        this.modoEditar = false;
        this.form.reset();
    };
    LivrosComponent.prototype.salvar = function () {
        if (!this.modoEditar) {
            this.salvarNovoLivro();
        }
        else {
            this.atualizarLivro();
        }
    };
    LivrosComponent.prototype.salvarNovoLivro = function () {
        var _this = this;
        this.service.post(this.itemEditarAtual)
            .subscribe(function (res) {
            _this.livros.push(res);
            _this.itemEditarAtual = new __WEBPACK_IMPORTED_MODULE_2__models_livros__["a" /* Livros */]();
            _this.modoEditar = false;
            _this.form.reset();
        });
    };
    LivrosComponent.prototype.atualizarLivro = function () {
        var _this = this;
        this.service.put(this.itemEditarAtual._id, this.itemEditarAtual)
            .subscribe(function (res) {
            _this.itemEditarAtual = new __WEBPACK_IMPORTED_MODULE_2__models_livros__["a" /* Livros */]();
            _this.modoEditar = false;
            _this.tituloLabel = 'Adicionar';
            _this.form.reset();
        });
    };
    LivrosComponent.prototype.excluir = function (id) {
        var _this = this;
        this.service.delete(id)
            .subscribe(function (res) {
            _this.carregarLivros();
        });
    };
    LivrosComponent.prototype.carregarLivros = function () {
        var _this = this;
        this.livros = [];
        this.service.lista()
            .subscribe(function (res) {
            _this.livros = res;
            //if (res.sucesso) {
            //} else {
            //}
        });
    };
    LivrosComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormGroup */]({});
        this.carregarLivros();
    };
    LivrosComponent.prototype.ngOnChanges = function () {
        this.form.reset({});
    };
    LivrosComponent.prototype.onSubmit = function () {
    };
    LivrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'livros',
            template: __webpack_require__("./src/app/components/livros.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_livros_services__["a" /* LivrosServices */]])
    ], LivrosComponent);
    return LivrosComponent;
}());



/***/ }),

/***/ "./src/app/models/livros.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Livros; });
var Livros = /** @class */ (function () {
    function Livros() {
    }
    return Livros;
}());



/***/ }),

/***/ "./src/app/services/livros.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_Http__ = __webpack_require__("./node_modules/@angular/Http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LivrosServices = /** @class */ (function () {
    function LivrosServices(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/api/livros";
    }
    LivrosServices.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    LivrosServices.prototype.lista = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
    };
    LivrosServices.prototype.post = function (livro) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_Http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl, JSON.stringify(livro), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LivrosServices.prototype.put = function (id, livro) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_Http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + id, JSON.stringify(livro), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LivrosServices.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    LivrosServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_Http__["b" /* Http */]])
    ], LivrosServices);
    return LivrosServices;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map