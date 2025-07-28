"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueStatusMaxAggregate = class IssueStatusMaxAggregate {
};
exports.IssueStatusMaxAggregate = IssueStatusMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusMaxAggregate.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusMaxAggregate.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusMaxAggregate.prototype, "updatedAt", void 0);
exports.IssueStatusMaxAggregate = IssueStatusMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueStatusMaxAggregate", {})
], IssueStatusMaxAggregate);
