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

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Fixed navbar -->\n  <nav class=\"navbar navbar-expand-md navbar-light fixed-top bg-white\">\n    <a class=\"navbar-brand\">Neptune 0.2b</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/newcreative\">New Creative</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n  <router-outlet></router-outlet>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__creative_creative_component__ = __webpack_require__("./src/app/creative/creative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updatecreative_updatecreative_component__ = __webpack_require__("./src/app/updatecreative/updatecreative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newcreative_newcreative_component__ = __webpack_require__("./src/app/newcreative/newcreative.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules





// internal components





// routes
var routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'newcreative', component: __WEBPACK_IMPORTED_MODULE_9__newcreative_newcreative_component__["a" /* NewcreativeComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_8__updatecreative_updatecreative_component__["a" /* UpdatecreativeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__creative_creative_component__["a" /* CreativeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__updatecreative_updatecreative_component__["a" /* UpdatecreativeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__newcreative_newcreative_component__["a" /* NewcreativeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/creative.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreativeService = /** @class */ (function () {
    function CreativeService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    CreativeService.prototype.listCreatives = function () {
        return this.http.get(this.apiurl + 'api/creatives');
    };
    CreativeService.prototype.getCreative = function (id) {
        return this.http.get(this.apiurl + 'api/creatives/' + id);
    };
    CreativeService.prototype.deleteCreative = function (id) {
        return this.http.delete(this.apiurl + 'api/creatives/' + id);
    };
    CreativeService.prototype.createCreative = function (creative) {
        return this.http.post(this.apiurl + 'api/creatives/submitcreative', creative);
    };
    CreativeService.prototype.updateCreative = function (id, creative) {
        return this.http.put(this.apiurl + 'api/creatives/' + id, creative);
    };
    CreativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CreativeService);
    return CreativeService;
}());



/***/ }),

/***/ "./src/app/creative/creative.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/creative/creative.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\">Summary</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/detail/{{creative._id}}\">View & Update</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <small> Line of Business:</small>\n        <h4> {{ creative.lob }} </h4>\n\n        <small> Creative Name:</small>\n        <h4> {{ creative.name }} </h4>\n\n      </div>\n\n      <div class=\"col-6\">\n        <small>Month |  Week:</small>\n        <h4> {{ creative.month }} | {{ creative.week }} </h4>\n\n        <small>Status:</small>\n        <h4> {{ creative.status }}</h4>\n\n      </div>\n\n    </div>\n<div class=\"row\">\n      <div class=\"col-12\">\n  <small>Reservation Family:</small>\n  <h4> {{ creative.resFam }}</h4>\n</div>\n</div>\n\n  </div>\n\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">Updated at: {{ creative.updatedAt }}</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/creative/creative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creative_service__ = __webpack_require__("./src/app/creative.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreativeComponent = /** @class */ (function () {
    function CreativeComponent(creativeService) {
        this.creativeService = creativeService;
    }
    CreativeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CreativeComponent.prototype, "creative", void 0);
    CreativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-creative',
            template: __webpack_require__("./src/app/creative/creative.component.html"),
            styles: [__webpack_require__("./src/app/creative/creative.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]])
    ], CreativeComponent);
    return CreativeComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-left: 7px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- gallery toolbar -->\n<div class=\"container\">\n  <div class=\"btn-toolbar\" role=\"toolbar\">\n    <form class=\"form-inline\">\n      <select class=\"custom-select my-1 mr-sm-2\" id=\"sortBy\">\n        <option selected>Sort By...</option>\n        <option value=\"1\">Line of Business</option>\n        <option value=\"2\">Month</option>\n        <option value=\"3\">Week</option>\n      </select>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\">\n      <button type=\"button\" class=\"btn btn-dark my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</div>\n<!-- creative card -->\n<div class=\"container\">\n    <app-creative\n      *ngFor='let creativeObject of creativeList'\n      [creative]=\"creativeObject\">\n    </app-creative>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creative_service__ = __webpack_require__("./src/app/creative.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(creativeService) {
        this.creativeService = creativeService;
        this.creativeList = null;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.updateCreativeList();
    };
    GalleryComponent.prototype.updateCreativeList = function () {
        var _this = this;
        this.creativeService.listCreatives().subscribe(function (creatives) {
            _this.creativeList = creatives;
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/newcreative/newcreative.component.css":
/***/ (function(module, exports) {

module.exports = "  .card {\r\n    margin-top: 60px;\r\n  }\r\n\r\n    .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n    .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n"

/***/ }),

/***/ "./src/app/newcreative/newcreative.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form #newCreativeForm=\"ngForm\" (ngSubmit)=\"save(newCreativeForm)\">\n      <div class=\"row\">\n\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"lob\">Line of Business</label>\n          <select class=\"form-control\" required id=\"lob\" name=\"lob\" [(ngModel)]=\"creative.lob\" #lob=\"ngModel\">\n            <option *ngFor='let lob of lobs' value=\"{{lob}}\">{{ lob }}</option>\n          </select>\n\n          <br>\n\n          <label for=\"estVolume\">Estimated Letter Volume</label>\n          <select class=\"form-control\" required id=\"estVolume\" name=\"estVolume\" [(ngModel)]=\"creative.estVolume\" #estVolume=\"ngModel\">\n            <option *ngFor='let volume of volumes' value=\"{{ volume }}\">{{ volume }}</option>\n          </select>\n\n          <br>\n\n          <label for=\"month\">Drop Month</label>\n          <select class=\"form-control\" required id=\"month\" name='month' [(ngModel)]=\"creative.month\" #month=\"ngModel\">\n            <option *ngFor='let month of months' value=\"{{ month }}\">{{ month }}</option>\n          </select>\n\n          <br>\n          <label for=\"week\">Drop Week</label>\n          <select class=\"form-control\" required id=\"week\" name='week' [(ngModel)]=\"creative.week\" #week=\"ngModel\">\n            <option *ngFor='let week of weeks' value=\"{{ week }}\">{{ week }}</option>\n          </select>\n\n        </div>\n\n        <div class=\"col-md-8 mb-3\">\n          <label for=\"name\">Creative Name</label>\n          <input type=\"text\" class=\"form-control\" required id=\"name\" name='name' [(ngModel)]=\"creative.name\" placeholder=\"Creative Name\" #name=\"ngModel\">\n\n          <br>\n\n          <label for=\"email\">Email Address</label>\n          <input type=\"email\" class=\"form-control\" required id=\"email\" name='email' [(ngModel)]=\"creative.email\" placeholder=\"Primary Business POC eMail\" #name=\"ngModel\">\n\n          <!-- determine if testing data required -->\n          <div *ngIf=\"creative.estVolume === '1,000,001 to 2,500,000' ||\n          creative.estVolume === '2,500,001 to 10,000,000' ||\n          creative.estVolume === '>10,000,000'\">\n\n          <br>\n\n          <label for=\"testingCode\">Testing Code</label>\n          <input type=\"text\" class=\"form-control\" id=\"testingCode\" name='testingCode' [(ngModel)]=\"creative.testingCode\" placeholder=\"Required if volume exceeds 1MM\">\n\n          <br>\n\n          <label for=\"testingCodeCreativeName\">Testing Code Creative Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"testingCodeCreativeName\" name='testingCodeCreativeName' [(ngModel)]=\"creative.testingCodeCreativeName\"  placeholder=\"Required if volume exceeds 1MM\">\n        </div>\n\n      </div>\n    </div>\n\n    <hr class=\"mb-4\">\n\n    <label for=\"resFam\">Reservation Family</label>\n    <select class=\"form-control\" required id=\"resFam\" name='resFam' [(ngModel)]=\"creative.resFam\" #resFam=\"ngModel\">\n      <option *ngFor='let resFam of resFams' value=\"{{ resFam }}\">{{ resFam }}</option>\n    </select>\n\n\n    <!-- <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"printMethod\">Print Method</label>\n        <select class=\"form-control\" required id=\"printMethod\" name='printMethod' [(ngModel)]=\"creative.printMethod\" #printMethod=\"ngModel\">\n          <option *ngFor='let printMethod of printMethods' value=\"{{ printMethod }}\">{{ printMethod }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"simplexDuplex\">Personization</label>\n        <select class=\"form-control\" required id=\"simplexDuplex\" name='simplexDuplex' [(ngModel)]=\"creative.simplexDuplex\" #simplexDuplex=\"ngModel\">\n          <option *ngFor='let simplexDuplex of simplexDuplexs' value=\"{{ simplexDuplex }}\">{{ simplexDuplex }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"height\">Letter Height</label>\n        <select class=\"form-control\" required id=\"height\" name='height' [(ngModel)]=\"creative.height\" #height=\"ngModel\">\n          <option *ngFor='let height of heights' value=\"{{ height }}\">{{ height }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"insert\">Number of Inserts</label>\n        <select class=\"form-control\" required id=\"insert\" name='insert' [(ngModel)]=\"creative.insert\" #insert=\"ngModel\">\n          <option *ngFor='let insert of inserts' value=\"{{ insert }}\">{{ insert }}</option>\n        </select>\n      </div>\n    </div> -->\n\n    <hr class=\"mb-4\">\n  <!-- <div *ngIf=\"!newCreativeForm.valid\">\n    <p>Complete form for cost estimate<p>\n  </div>\n\n\n<div *ngIf=\"newCreativeForm.valid\">\n<p>Estimate cost per creative: $10<p>\n</div>\n    <hr class=\"mb-4\"> -->\n\n\n  <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" [disabled]=\"!newCreativeForm.valid\" >Complete</button>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/newcreative/newcreative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcreativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creative_service__ = __webpack_require__("./src/app/creative.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewcreativeComponent = /** @class */ (function () {
    function NewcreativeComponent(creativeService, router) {
        this.creativeService = creativeService;
        this.router = router;
        // creative object, bound to the form fields
        this.creative = {};
        // define allowable fields
        this.lobs = [
            'Mainstreet',
            'Upmarket',
            "Sony",
            "Small Business"
        ];
        this.status = [
            'New',
            'Complete',
            'Pending',
            'Reviewed'
        ];
        this.vendors = [
            'DD Ronelly',
            'Outlet',
            "Bartleby's",
            "JLM"
        ];
        this.volumes = [
            '1 to 100,000',
            '100,001 to 250,000',
            '250,001 to 500,000',
            '500,001 to 1,000,000',
            '1,000,001 to 2,500,000',
            '2,500,001 to 10,000,000',
            '>10,000,000'
        ];
        this.printMethods = [
            'Inkjet',
            'Laser',
            "MICR"
        ];
        this.simplexDuplexs = [
            'Simpex',
            'Duplex'
        ];
        this.heights = [
            '11',
            '14',
            '17',
            '22',
        ];
        this.inserts = [
            '1',
            '2',
        ];
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'Decemeber'
        ];
        this.weeks = [
            '1',
            '2',
            '3',
            '4',
            '5'
        ];
        this.miscCharges = [
            { charge: 'Spot Glue', code: 'SPG' },
            { charge: 'Glitter', code: 'GLR' },
            { charge: 'Waffer Seal', code: 'WFS' },
            { charge: 'Attractive Smell', code: 'SML' },
            { charge: 'Matt Bartles Awesomeness', code: 'A1+' }
        ];
        this.resFams = [
            'Interstack Card Affix',
            'Closed Face with Unique Spot Emboss',
            'Interstack Cardstock Buckslip'
        ];
    }
    NewcreativeComponent.prototype.ngOnInit = function () {
    };
    NewcreativeComponent.prototype.save = function (newCreativeForm) {
        this.creative.status = 'New';
        this.creativeService.createCreative(this.creative)
            .subscribe(function (creative) {
            console.log(creative);
        });
        this.router.navigate(['/gallery']);
    };
    NewcreativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newcreative',
            template: __webpack_require__("./src/app/newcreative/newcreative.component.html"),
            styles: [__webpack_require__("./src/app/newcreative/newcreative.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewcreativeComponent);
    return NewcreativeComponent;
}());



/***/ }),

/***/ "./src/app/updatecreative/updatecreative.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin-top: 60px;\r\n}\r\n\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\nborder-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n\r\n.ng-invalid:not(form)  {\r\nborder-left: 5px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/updatecreative/updatecreative.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\">\n        <div *ngIf=\"!editing\"><a class=\"nav-link active\" (click)=\"setEditMode(false)\">Details</a></div>\n        <div *ngIf=\"editing\"><a class=\"nav-link\" (click)=\"setEditMode(false)\">Details</a></div>\n      </li>\n      <li class=\"nav-item\">\n        <div *ngIf=\"!editing\"><a class=\"nav-link\" (click)=\"setEditMode(true)\">Update</a></div>\n        <div *ngIf=\"editing\"><a class=\"nav-link active\" (click)=\"setEditMode(true)\">Update</a></div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"deleteCreative(creative._id)\">Delete</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"card-body\">\n    <div *ngIf=\"!editing\">\n      <div class=\"row\">\n        <div class=\"col-md-5 mb-3\">\n          <small> Line of Business:</small>\n          <h4> {{ creative.lob }} </h4>\n\n          <small> Estimated Letter Volume:</small>\n          <h4> {{ creative.estVolume }} </h4>\n\n          <small> Drop Month:</small>\n          <h4> {{ creative.month }} </h4>\n\n          <small> Drop Week:</small>\n          <h4> {{ creative.week }} </h4>\n\n        </div>\n\n        <div class=\"col-md-7 mb-3\">\n          <small>Creative Name:</small>\n          <h4> {{ creative.name }} </h4>\n\n          <small>eMail Address:</small>\n          <h4> {{ creative.email }} </h4>\n\n          <!-- determine if testing data required -->\n          <div *ngIf=\"creative.estVolume === '1,000,001 to 2,500,000' ||\n          creative.estVolume === '2,500,001 to 10,000,000' ||\n          creative.estVolume === '>10,000,000'\">\n\n          <small>Testing Code</small>\n          <h4> {{ creative.testingCode }} </h4>\n\n          <small>Testing Code Creative Name</small>\n          <h4> {{ creative.testingCodeCreativeName }} </h4>\n        </div>\n\n      </div>\n\n    </div>\n        <hr class=\"mb-4\">\n        <div class=\"row\">\n              <div class=\"col-12\">\n          <small>Reservation Family:</small>\n          <h4> {{ creative.resFam }}</h4>\n        </div>\n        </div>\n    <hr class=\"mb-4\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <small>Print Method</small>\n        <h4> {{ creative.printMethod }} </h4>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <small>Personization</small>\n        <h4> {{ creative.simplexDuplex }} </h4>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <small>Letter Height</small>\n        <h4> {{ creative.height }} </h4>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <small>Number of Inserts</small>\n        <h4> {{ creative.insert }} </h4>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div *ngIf=\"editing\">\n\n    <form #newCreativeForm=\"ngForm\" (ngSubmit)=\"updateCreative(updateCreativeForm)\">\n      <div class=\"row\">\n        <div class=\"col-md-5 mb-3\">\n          <label for=\"lob\">Line of Business</label>\n          <select class=\"form-control\" required id=\"lob\" name=\"lob\" [(ngModel)]=\"creative.lob\" #lob=\"ngModel\">\n            <option *ngFor='let lob of lobs' value=\"{{lob}}\">{{ lob }}</option>\n          </select>\n\n          <br>\n\n          <label for=\"estVolume\">Estimated Letter Volume</label>\n          <select class=\"form-control\" required id=\"estVolume\" name=\"estVolume\" [(ngModel)]=\"creative.estVolume\" #estVolume=\"ngModel\">\n            <option *ngFor='let volume of volumes' value=\"{{ volume }}\">{{ volume }}</option>\n          </select>\n\n          <br>\n\n          <label for=\"month\">Drop Month</label>\n          <select class=\"form-control\" required id=\"month\" name='month' [(ngModel)]=\"creative.month\" #month=\"ngModel\">\n            <option *ngFor='let month of months' value=\"{{ month }}\">{{ month }}</option>\n          </select>\n\n          <br>\n          <label for=\"week\">Drop Week</label>\n          <select class=\"form-control\" required id=\"week\" name='week' [(ngModel)]=\"creative.week\" #week=\"ngModel\">\n            <option *ngFor='let week of weeks' value=\"{{ week }}\">{{ week }}</option>\n          </select>\n\n        </div>\n\n        <div class=\"col-md-7 mb-3\">\n          <label for=\"name\">Creative Name</label>\n          <input type=\"text\" class=\"form-control\" required id=\"name\" name='name' [(ngModel)]=\"creative.name\" placeholder=\"Creative Name\" #name=\"ngModel\">\n\n          <br>\n\n          <label for=\"email\">Email Address</label>\n          <input type=\"email\" class=\"form-control\" required id=\"email\" name='email' [(ngModel)]=\"creative.email\" placeholder=\"Primary Business POC eMail\" #name=\"ngModel\">\n\n          <!-- determine if testing data required -->\n          <div *ngIf=\"creative.estVolume === '1,000,001 to 2,500,000' ||\n          creative.estVolume === '2,500,001 to 10,000,000' ||\n          creative.estVolume === '>10,000,000'\">\n\n          <br>\n\n          <label for=\"testingCode\">Testing Code</label>\n          <input type=\"text\" class=\"form-control\" id=\"testingCode\" name='testingCode' [(ngModel)]=\"creative.testingCode\" placeholder=\"Required if volume exceeds 1MM\">\n\n          <br>\n\n          <label for=\"testingCodeCreativeName\">Testing Code Creative Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"testingCodeCreativeName\" name='testingCodeCreativeName' [(ngModel)]=\"creative.testingCodeCreativeName\"  placeholder=\"Required if volume exceeds 1MM\">\n        </div>\n\n      </div>\n    </div>\n\n    <hr class=\"mb-4\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"printMethod\">Print Method</label>\n        <select class=\"form-control\" required id=\"printMethod\" name='printMethod' [(ngModel)]=\"creative.printMethod\" #printMethod=\"ngModel\">\n          <option *ngFor='let printMethod of printMethods' value=\"{{ printMethod }}\">{{ printMethod }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"simplexDuplex\">Personization</label>\n        <select class=\"form-control\" required id=\"simplexDuplex\" name='simplexDuplex' [(ngModel)]=\"creative.simplexDuplex\" #simplexDuplex=\"ngModel\">\n          <option *ngFor='let simplexDuplex of simplexDuplexs' value=\"{{ simplexDuplex }}\">{{ simplexDuplex }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"height\">Letter Height</label>\n        <select class=\"form-control\" required id=\"height\" name='height' [(ngModel)]=\"creative.height\" #height=\"ngModel\">\n          <option *ngFor='let height of heights' value=\"{{ height }}\">{{ height }}</option>\n        </select>\n      </div>\n\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"insert\">Number of Inserts</label>\n        <select class=\"form-control\" required id=\"insert\" name='insert' [(ngModel)]=\"creative.insert\" #insert=\"ngModel\">\n          <option *ngFor='let insert of inserts' value=\"{{ insert }}\">{{ insert }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label for=\"resFam\">Reservation Family</label>\n        <select class=\"form-control\" required id=\"resFam\" name='resFam' [(ngModel)]=\"creative.resFam\" #resFam=\"ngModel\">\n          <option *ngFor='let resFam of resFams' value=\"{{ resFam }}\">{{ resFam }}</option>\n        </select>\n      </div>\n    </div>\n            <hr class=\"mb-4\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div *ngIf=\"!newCreativeForm.valid\">\n          <p>Complete form for cost estimate<p>\n          </div>\n\n\n          <div *ngIf=\"newCreativeForm.valid\">\n            <p>Estimate cost per creative: $10<p>\n            </div>\n\n            <hr class=\"mb-4\">\n          </div>\n        </div>\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" [disabled]=\"!newCreativeForm.valid\" >Update</button>\n      </form>\n    </div>\n\n\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">Updated at: {{ creative.updatedAt }}</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/updatecreative/updatecreative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatecreativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creative_service__ = __webpack_require__("./src/app/creative.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatecreativeComponent = /** @class */ (function () {
    function UpdatecreativeComponent(creativeService, route, router) {
        this.creativeService = creativeService;
        this.route = route;
        this.router = router;
        // declare creative
        this.creative = {};
        // flag for edit mode
        this.editing = false;
        // define allowable fields
        this.lobs = [
            'Mainstreet',
            'Upmarket',
            "Sony",
            "Small Business"
        ];
        this.status = [
            'New',
            'Complete',
            'Pending',
            'Reviewed'
        ];
        this.vendors = [
            'DD Ronelly',
            'Outlet',
            "Bartleby's",
            "JLM"
        ];
        this.volumes = [
            '1 to 100,000',
            '100,001 to 250,000',
            '250,001 to 500,000',
            '500,001 to 1,000,000',
            '1,000,001 to 2,500,000',
            '2,500,001 to 10,000,000',
            '>10,000,000'
        ];
        this.printMethods = [
            'Inkjet',
            'Laser',
            "MICR"
        ];
        this.simplexDuplexs = [
            'Simpex',
            'Duplex'
        ];
        this.heights = [
            '11',
            '14',
            '17',
            '22',
        ];
        this.inserts = [
            '1',
            '2',
        ];
        this.months = ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'Decemeber'
        ];
        this.weeks = [
            '1',
            '2',
            '3',
            '4',
            '5'
        ];
        this.miscCharges = [
            { charge: 'Spot Glue', code: 'SPG' },
            { charge: 'Glitter', code: 'GLR' },
            { charge: 'Waffer Seal', code: 'WFS' },
            { charge: 'Attractive Smell', code: 'SML' },
            { charge: 'Matt Bartles Awesomeness', code: 'A1+' }
        ];
        this.resFams = [
            'Interstack Card Affix',
            'Closed Face with Unique Spot Emboss',
            'Interstack Cardstock Buckslip'
        ];
    }
    // bound to edit and cancel buttons in view
    UpdatecreativeComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    UpdatecreativeComponent.prototype.ngOnInit = function () {
        this.getCreative();
    };
    UpdatecreativeComponent.prototype.getCreative = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.creativeService.getCreative(param).subscribe(function (creative) {
            _this.creative = creative;
        });
    };
    UpdatecreativeComponent.prototype.updateCreative = function (updateCreativeForm) {
        this.creative.status = 'Updated';
        var param = this.route.snapshot.paramMap.get('id');
        this.creativeService.updateCreative(param, this.creative)
            .subscribe(function (creative) {
            console.log(creative);
        });
        this.editing = false;
    };
    UpdatecreativeComponent.prototype.deleteCreative = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.creative.name + "?")) {
            console.log("deleting " + this.creative._id);
            this.creativeService.deleteCreative(this.creative._id)
                .subscribe(function (result) {
                alert(_this.creative.name + " has been deleted");
                _this.router.navigate(['/gallery']);
            });
        }
    };
    UpdatecreativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updatecreative',
            template: __webpack_require__("./src/app/updatecreative/updatecreative.component.html"),
            styles: [__webpack_require__("./src/app/updatecreative/updatecreative.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__creative_service__["a" /* CreativeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UpdatecreativeComponent);
    return UpdatecreativeComponent;
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
    production: false,
    apiurl: 'http://192.241.152.128:8080/'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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