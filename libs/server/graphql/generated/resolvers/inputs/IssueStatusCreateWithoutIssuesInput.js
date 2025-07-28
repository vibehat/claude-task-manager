"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssueStatusCreateWithoutIssuesInput = class IssueStatusCreateWithoutIssuesInput {
};
exports.IssueStatusCreateWithoutIssuesInput = IssueStatusCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateWithoutIssuesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateWithoutIssuesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateWithoutIssuesInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
exports.IssueStatusCreateWithoutIssuesInput = IssueStatusCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusCreateWithoutIssuesInput", {})
], IssueStatusCreateWithoutIssuesInput);
