"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCountAggregate_1 = require("../outputs/IssueStatusCountAggregate");
const IssueStatusMaxAggregate_1 = require("../outputs/IssueStatusMaxAggregate");
const IssueStatusMinAggregate_1 = require("../outputs/IssueStatusMinAggregate");
let IssueStatusGroupBy = class IssueStatusGroupBy {
};
exports.IssueStatusGroupBy = IssueStatusGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusGroupBy.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCountAggregate_1.IssueStatusCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCountAggregate_1.IssueStatusCountAggregate)
], IssueStatusGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMinAggregate_1.IssueStatusMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMinAggregate_1.IssueStatusMinAggregate)
], IssueStatusGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMaxAggregate_1.IssueStatusMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMaxAggregate_1.IssueStatusMaxAggregate)
], IssueStatusGroupBy.prototype, "_max", void 0);
exports.IssueStatusGroupBy = IssueStatusGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueStatusGroupBy", {})
], IssueStatusGroupBy);
