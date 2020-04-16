(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ui/src/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./ui/src/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ui/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ui/src/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./ui/src/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boards/boards.component */ "./ui/src/app/boards/boards.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "./ui/src/app/board/board.component.ts");





var routes = [
    { path: '', redirectTo: '/boards', pathMatch: 'full' },
    { path: 'boards', component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_3__["BoardsComponent"] },
    { path: 'b/:id', component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ui/src/app/app.component.css":
/*!**************************************!*\
  !*** ./ui/src/app/app.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\tDusty \t\t#96858F\n\tLavendar\t#6D7993\n\tOvercast\t#9099A2\n\tPaper\t\t#D5D5D5\n*/\n\n.centerAlign {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7O0FBRUQ7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoidWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cdER1c3R5IFx0XHQjOTY4NThGXG5cdExhdmVuZGFyXHQjNkQ3OTkzXG5cdE92ZXJjYXN0XHQjOTA5OUEyXG5cdFBhcGVyXHRcdCNENUQ1RDVcbiovXG5cbi5jZW50ZXJBbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./ui/src/app/app.component.html":
/*!***************************************!*\
  !*** ./ui/src/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>{{title}}</span>\n</mat-toolbar>\n\n<div id=\"app\">\n  <router-outlet></router-outlet>\n  <app-messages></app-messages>\n</div>\n"

/***/ }),

/***/ "./ui/src/app/app.component.ts":
/*!*************************************!*\
  !*** ./ui/src/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gBoards';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ui/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ui/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ui/src/app/app.module.ts":
/*!**********************************!*\
  !*** ./ui/src/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./ui/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./ui/src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./boards/boards.component */ "./ui/src/app/boards/boards.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./ui/src/app/messages/messages.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./board/board.component */ "./ui/src/app/board/board.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/list.component */ "./ui/src/app/list/list.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _boards_boards_component__WEBPACK_IMPORTED_MODULE_14__["BoardsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_16__["BoardComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ui/src/app/board.service.ts":
/*!*************************************!*\
  !*** ./ui/src/app/board.service.ts ***!
  \*************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./ui/src/app/message.service.ts");






var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var BoardService = /** @class */ (function () {
    function BoardService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    BoardService.prototype.getBoards = function () {
        var _this = this;
        return this.http.get('http://localhost:8080/board/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('Fetched Boards'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBoards', [])));
    };
    BoardService.prototype.getBoard = function (id) {
        var _this = this;
        return this.http.get("http://localhost:8080/board/get/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Fetched Board: id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getBoard id=" + id)));
    };
    BoardService.prototype.addBoard = function (board) {
        var _this = this;
        return this.http.post('http://localhost:8080/board/create', board, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (board) { return _this.log("Added Board w/ name=" + board.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBoard')));
    };
    BoardService.prototype.updateBoard = function (board) {
        var _this = this;
        return this.http.put('http://localhost:8080/board/update', board, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Updated Board: name=" + board.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("updateBoard name=" + board.name)));
    };
    BoardService.prototype.deleteBoard = function (board) {
        var _this = this;
        return this.http.delete("http://localhost:8080/board/delete/" + board.id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Deleted Board: name=" + board.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("deleteBoard name=" + board.name)));
    };
    BoardService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    BoardService.prototype.log = function (message) {
        this.messageService.add("BoardService: " + message);
    };
    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./ui/src/app/board/board.component.css":
/*!**********************************************!*\
  !*** ./ui/src/app/board/board.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #454545;\n  margin-bottom: 0px;\n  padding-left: var(--mdc-layout-grid-margin-desktop, 24px);\n}\n\n.full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InVpL3NyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgY29sb3I6ICM0NTQ1NDU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtbWFyZ2luLWRlc2t0b3AsIDI0cHgpO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./ui/src/app/board/board.component.html":
/*!***********************************************!*\
  !*** ./ui/src/app/board/board.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lists-wrapper\" *ngIf=\"board\">\n  <h2><i class=\"fas fa-clipboard-list m-r-10\"></i> {{board.name}}</h2>\n  <div class=\"mdc-layout-grid\" *ngIf=\"lists\">\n    <div class=\"mdc-layout-grid__inner\">\n      <div class=\"mdc-layout-grid__cell--span-3\" *ngFor=\"let list of lists\">\n        <app-list [list]=\"list\" (deleteListEvent)=\"deleteListHandler(list);\" (updateListEvent)=\"updateListHandler(list);\"></app-list>\n      </div>\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <mat-card class=\"list-card\">\n          <mat-card-content>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"List Name\" value=\"\" #listName>\n            </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-flat-button color=\"primary\" (click)=\"addList(listName.value); listName.value=''\">Add</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./ui/src/app/board/board.component.ts":
/*!*********************************************!*\
  !*** ./ui/src/app/board/board.component.ts ***!
  \*********************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board.service */ "./ui/src/app/board.service.ts");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list.service */ "./ui/src/app/list.service.ts");






var BoardComponent = /** @class */ (function () {
    function BoardComponent(route, boardService, listService, location) {
        this.route = route;
        this.boardService = boardService;
        this.listService = listService;
        this.location = location;
        this.addingCard = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.getBoard();
        this.getLists();
    };
    BoardComponent.prototype.getBoard = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.boardService.getBoard(id).subscribe(function (board) { return _this.board = board; });
    };
    BoardComponent.prototype.getLists = function () {
        var _this = this;
        var boardID = this.route.snapshot.paramMap.get('id');
        this.listService.getLists(boardID).subscribe(function (lists) {
            _this.lists = lists;
        });
    };
    BoardComponent.prototype.addList = function (name) {
        var _this = this;
        var boardID = this.route.snapshot.paramMap.get('id');
        name = name.trim();
        if (!name) {
            return;
        }
        console.log(boardID + " | " + name);
        this.listService.addList({ boardID: boardID, name: name, cards: [] }).subscribe(function (list) {
            _this.lists.push(list);
        });
    };
    BoardComponent.prototype.deleteListHandler = function (list) {
        var _this = this;
        this.listService.deleteList(list).subscribe(function (deletedList) {
            var listIndex = _this.lists.indexOf(list);
            if (listIndex != -1) {
                _this.lists.splice(listIndex, 1);
            }
        });
    };
    BoardComponent.prototype.updateListHandler = function (list) {
        this.listService.updateList(list).subscribe(function (list) { });
    };
    BoardComponent.prototype.goBack = function () {
        this.location.back();
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./ui/src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./ui/src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"], _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./ui/src/app/boards/boards.component.css":
/*!************************************************!*\
  !*** ./ui/src/app/boards/boards.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #454545;\n  margin-bottom: 0px;\n  padding-left: var(--mdc-layout-grid-margin-desktop, 24px);\n}\n\nmat-card {\n  cursor: pointer;\n}\n\n.m-r-10 {\n  margin-right: 10px;\n}\n\n.full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NyYy9hcHAvYm9hcmRzL2JvYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InVpL3NyYy9hcHAvYm9hcmRzL2JvYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1kYy1sYXlvdXQtZ3JpZC1tYXJnaW4tZGVza3RvcCwgMjRweCk7XG59XG5cbm1hdC1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubS1yLTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./ui/src/app/boards/boards.component.html":
/*!*************************************************!*\
  !*** ./ui/src/app/boards/boards.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boards-wrapper\">\n  <h2><i class=\"fas fa-user m-r-10\"></i> Boards</h2>\n  <div class=\"mdc-layout-grid\">\n    <div class=\"mdc-layout-grid__inner\">\n      <div class=\"mdc-layout-grid__cell--span-3\" *ngFor=\"let board of boards\">\n        <mat-card class=\"board-card\" routerLink=\"/b/{{board.id}}\">\n          <mat-card-header>\n            <mat-card-title>{{board.name}}</mat-card-title>\n            <mat-card-subtitle>{{board.id}}</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <mat-form-field *ngIf=\"editingBoard == board\">\n              <input matInput [(ngModel)]=\"board.name\" (click)=\"$event.stopPropagation();\" (keyup.enter)=\"updateBoard(board); editingBoard = null;\" placeholder=\"New Name\" value=\"\">\n            </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-flat-button color=\"primary\" class=\"m-r-10\" (click)=\"editBoard(board); $event.stopPropagation();\"><span class=\"fas fa-edit\"></span></button>\n            <button mat-flat-button color=\"primary\" (click)=\"deleteBoard(board); $event.stopPropagation();\"><span class=\"fas fa-trash\"></span></button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"mdc-layout-grid__cell--span-3\">\n        <mat-card>\n          <mat-card-content>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Board Name\" value=\"\" #boardName>\n            </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-flat-button color=\"primary\" (click)=\"addBoard(boardName.value); boardName.value=''\">Add</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./ui/src/app/boards/boards.component.ts":
/*!***********************************************!*\
  !*** ./ui/src/app/boards/boards.component.ts ***!
  \***********************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./ui/src/app/board.service.ts");



var BoardsComponent = /** @class */ (function () {
    function BoardsComponent(boardService) {
        this.boardService = boardService;
    }
    BoardsComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    BoardsComponent.prototype.getBoards = function () {
        var _this = this;
        this.boardService.getBoards().subscribe(function (boards) { return _this.boards = boards; });
    };
    BoardsComponent.prototype.addBoard = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.boardService.addBoard({ name: name }).subscribe(function (board) {
            _this.boards.push(board);
        });
    };
    BoardsComponent.prototype.deleteBoard = function (board) {
        var _this = this;
        if (!board) {
            return;
        }
        this.boardService.deleteBoard(board).subscribe(function (deletedBoard) {
            var boardIndex = _this.boards.indexOf(board);
            if (boardIndex != -1) {
                _this.boards.splice(boardIndex, 1);
            }
        });
    };
    BoardsComponent.prototype.updateBoard = function (board) {
        if (!board) {
            return;
        }
        this.boardService.updateBoard(board).subscribe(function (board) { });
    };
    BoardsComponent.prototype.editBoard = function (board) {
        if (!this.editingBoard) {
            this.editingBoard = board;
        }
        else if (this.editingBoard == board) {
            this.editingBoard = null;
        }
        else {
            this.editingBoard = board;
        }
    };
    BoardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boards',
            template: __webpack_require__(/*! ./boards.component.html */ "./ui/src/app/boards/boards.component.html"),
            styles: [__webpack_require__(/*! ./boards.component.css */ "./ui/src/app/boards/boards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])
    ], BoardsComponent);
    return BoardsComponent;
}());



/***/ }),

/***/ "./ui/src/app/list.service.ts":
/*!************************************!*\
  !*** ./ui/src/app/list.service.ts ***!
  \************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./ui/src/app/message.service.ts");






var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var ListService = /** @class */ (function () {
    function ListService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    ListService.prototype.getLists = function (id) {
        var _this = this;
        return this.http.get("http://localhost:8080/list/board/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('Fetched Board Lists'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLists', [])));
    };
    ListService.prototype.addList = function (list) {
        var _this = this;
        list.board = { id: list.boardID }; // TODO refactor
        return this.http.post('http://localhost:8080/list/create', list, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (list) { return _this.log("Added List w/ name=" + list.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addList')));
    };
    ListService.prototype.updateList = function (list) {
        var _this = this;
        return this.http.put('http://localhost:8080/list/update', list, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Updated List: name=" + list.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("updateList name=" + list.name)));
    };
    ListService.prototype.deleteList = function (list) {
        var _this = this;
        return this.http.delete("http://localhost:8080/list/delete/" + list.id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Deleted List: name=" + list.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("deleteList name=" + list.name)));
    };
    //***** ***** ***** CARDS
    ListService.prototype.addCard = function (listID, card) {
        var _this = this;
        card.list = { id: listID };
        return this.http.post("http://localhost:8080/list/card/" + listID + "/add", card, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (card1) { return _this.log("Added Card w/ name=" + card1.text); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCard')));
    };
    ListService.prototype.updateCard = function (listID, cardLastName, card) {
        var _this = this;
        return this.http.put('http://localhost:8080/list/card/update', { listID: listID, cardLastName: cardLastName, card: card }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Updated List: name=" + card.text); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("updateList name=" + card.text)));
    };
    ListService.prototype.deleteCard = function (listID, card) {
        var _this = this;
        return this.http.delete("http://localhost:8080/list/card/delete/" + card.id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Deleted Card: name=" + card.text); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("deleteCard name=" + card.text)));
    };
    ListService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ListService.prototype.log = function (message) {
        this.messageService.add("ListService: " + message);
    };
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./ui/src/app/list.ts":
/*!****************************!*\
  !*** ./ui/src/app/list.ts ***!
  \****************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
var List = /** @class */ (function () {
    function List() {
    }
    return List;
}());



/***/ }),

/***/ "./ui/src/app/list/list.component.css":
/*!********************************************!*\
  !*** ./ui/src/app/list/list.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.mini-button {\n  min-width: 42px;\n  height: 25px;\n  line-height: 0 !important;\n  float: right;\n}\n\n.card {\n  font-size: 16px;\n  background: #F6F6F6;\n  padding: 15px;\n  word-wrap: break-word;\n\tmargin: 0px 0px 15px 0px;\n}\n\n.mini-btn {\n  min-width: 40px;\n  height: 25px;\n  line-height: 0 !important;\n}\n\n.m-r-10 {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7Q0FDdEIsd0JBQXdCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoidWkvc3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taW5pLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNDJweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXJkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbjogMHB4IDBweCAxNXB4IDBweDtcbn1cblxuLm1pbmktYnRuIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLXItMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./ui/src/app/list/list.component.html":
/*!*********************************************!*\
  !*** ./ui/src/app/list/list.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"list-card\">\n  <mat-card-header>\n    <mat-card-title>{{list.name}}</mat-card-title>\n    <div class=\"full-width\">\n      <button mat-flat-button color=\"primary\" class=\"mini-button\" (click)=\"deleteList(list);\"><span class=\"fas fa-trash\"></span></button>\n      <button mat-flat-button color=\"primary\" class=\"mini-button m-r-10\" (click)=\"editList();\"><span class=\"fas fa-edit\"></span></button>\n    </div>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-form-field class=\"full-width\" *ngIf=\"editingList\">\n      <input matInput [(ngModel)]=\"list.name\" (keyup.enter)=\"updateList(list); editingList = false;\" placeholder=\"New Name\" value=\"\">\n    </mat-form-field>\n    <div class=\"full-width\" *ngIf=\"list.cards\">\n      <div *ngFor=\"let card of list.cards; index as i;\">\n        <mat-card class=\"card\">\n          {{card.text}}\n          <mat-form-field class=\"full-width\" *ngIf=\"editingCard == i\">\n            <input matInput placeholder=\"Card Title\" [(ngModel)]=\"card\" (keyup.enter)=\"updateCard(card); editingCard = -1;\" value=\"\">\n          </mat-form-field>\n          <mat-card-actions>\n            <button mat-flat-button color=\"primary\" class=\"m-r-10 mini-btn\" (click)=\"deleteCard(card);\"><span class=\"fas fa-trash\"></span></button>\n            <button mat-flat-button color=\"primary\" class=\"mini-btn\" (click)=\"editCard(i); cardLastName = card;\"><span class=\"fas fa-edit\"></span></button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <div *ngIf=\"addingCard == false\">\n      <button mat-button class=\"full-width\" (click)=\"addingCard = true;\">Add a Card</button>\n    </div>\n    <div *ngIf=\"addingCard == true\">\n      <mat-card>\n        <mat-card-content>\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Card Title\" value=\"\" #cardName>\n          </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-flat-button color=\"primary\" (click)=\"addCard(cardName.value); addingCard = false;\" class=\"m-r-10\">Create</button>\n          <button mat-flat-button color=\"primary\" (click)=\"addingCard = false;\"><span class=\"fas fa-times\"></span></button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./ui/src/app/list/list.component.ts":
/*!*******************************************!*\
  !*** ./ui/src/app/list/list.component.ts ***!
  \*******************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list */ "./ui/src/app/list.ts");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list.service */ "./ui/src/app/list.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(listService) {
        this.listService = listService;
        this.addingCard = false;
        this.editingList = false;
        this.deleteListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.deleteList = function (list) {
        if (!list) {
            return;
        }
        this.deleteListEvent.emit(list);
    };
    ListComponent.prototype.updateList = function (list) {
        if (!list) {
            return;
        }
        this.updateListEvent.emit(list);
    };
    ListComponent.prototype.addCard = function (cardText) {
        var _this = this;
        cardText = cardText.trim();
        if (!cardText) {
            return;
        }
        this.listService.addCard(this.list.id, { text: cardText }).subscribe(function (card) {
            console.log(card);
            _this.list.cards.push(card);
        });
    };
    ListComponent.prototype.deleteCard = function (cardToDelete) {
        var _this = this;
        if (!cardToDelete) {
            return;
        }
        var cardIndex = this.list.cards.findIndex(function (c) { return c.id === cardToDelete.id; });
        this.listService.deleteCard(this.list.id, cardToDelete).subscribe(function (card) {
            if (cardIndex !== -1) {
                _this.list.cards.splice(cardIndex, 1);
            }
        });
    };
    ListComponent.prototype.updateCard = function (cardText) {
        if (!cardText) {
            return;
        }
        this.listService.updateCard(this.list.id, this.cardLastName, { text: cardText }).subscribe(function (card) { });
    };
    ListComponent.prototype.editList = function () {
        this.editingList = !this.editingList;
    };
    ListComponent.prototype.editCard = function (cardIndex) {
        if (this.editingCard != cardIndex) {
            this.editingCard = cardIndex;
        }
        else {
            this.editingCard = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _list__WEBPACK_IMPORTED_MODULE_2__["List"])
    ], ListComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "deleteListEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "updateListEvent", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./ui/src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./ui/src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./ui/src/app/message.service.ts":
/*!***************************************!*\
  !*** ./ui/src/app/message.service.ts ***!
  \***************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");



var MessageService = /** @class */ (function () {
    function MessageService(snackBar) {
        this.snackBar = snackBar;
    }
    MessageService.prototype.add = function (message) {
        this.snackBar.open(message, "", { duration: 2000, });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material___WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./ui/src/app/messages/messages.component.css":
/*!****************************************************!*\
  !*** ./ui/src/app/messages/messages.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #454545;\n}\n\n.clearBtn {\n  font-size: 1.025rem;\n  background-color: #9099A2;\n  border: none;\n  padding: 5px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\n\n.messageCards {\n  position: relative;\n  display: inline-block;\n  left: 0;\n  background-color: #C5C5C5;\n  margin: .5em;\n  padding: .3em 0;\n  height: 100%;\n  width: 25em;\n  border-radius: 5px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoidWkvc3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBjb2xvcjogIzQ1NDU0NTtcbn1cblxuLmNsZWFyQnRuIHtcbiAgZm9udC1zaXplOiAxLjAyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTlBMjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cblxuLm1lc3NhZ2VDYXJkcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUM1O1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./ui/src/app/messages/messages.component.html":
/*!*****************************************************!*\
  !*** ./ui/src/app/messages/messages.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ui/src/app/messages/messages.component.ts":
/*!***************************************************!*\
  !*** ./ui/src/app/messages/messages.component.ts ***!
  \***************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./ui/src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./ui/src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./ui/src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./ui/src/environments/environment.ts":
/*!********************************************!*\
  !*** ./ui/src/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ui/src/main.ts":
/*!************************!*\
  !*** ./ui/src/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ui/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ui/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./ui/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\tracker\ui\src\main.ts */"./ui/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map