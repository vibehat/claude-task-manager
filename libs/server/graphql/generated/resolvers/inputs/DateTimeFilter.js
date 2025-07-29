"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedDateTimeFilter_1 = require("../inputs/NestedDateTimeFilter");
let DateTimeFilter = class DateTimeFilter {
};
exports.DateTimeFilter = DateTimeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DateTimeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], DateTimeFilter.prototype, "not", void 0);
exports.DateTimeFilter = DateTimeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DateTimeFilter", {})
], DateTimeFilter);
