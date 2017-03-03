var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var RetrieverService = (function () {
    function RetrieverService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/api';
    }
    RetrieverService.prototype.getList = function () {
        return this.http.get("" + this.BASE_URL)
            .map(function (res) { return res.json(); });
    };
    RetrieverService.prototype.get = function (id) {
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    RetrieverService.prototype.addEntry = function (entry) {
        console.log("entry", entry);
        return this.http.post("" + this.BASE_URL, entry)
            .map(function (res) { return res.json(); });
    };
    return RetrieverService;
}());
RetrieverService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RetrieverService);
export { RetrieverService };
//# sourceMappingURL=../../../src/app/retriever.service.js.map