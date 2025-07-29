"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCount_1 = require("../resolvers/outputs/IssueStatusCount");
let IssueStatus = class IssueStatus {
};
exports.IssueStatus = IssueStatus;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatus.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatus.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatus.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatus.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatus.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatus.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCount_1.IssueStatusCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCount_1.IssueStatusCount)
], IssueStatus.prototype, "_count", void 0);
exports.IssueStatus = IssueStatus = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IssueStatus", {})
], IssueStatus);
