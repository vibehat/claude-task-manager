"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IssuePriorityCreateWithoutIssuesInput = class IssuePriorityCreateWithoutIssuesInput {
};
exports.IssuePriorityCreateWithoutIssuesInput = IssuePriorityCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateWithoutIssuesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateWithoutIssuesInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityCreateWithoutIssuesInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
exports.IssuePriorityCreateWithoutIssuesInput = IssuePriorityCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityCreateWithoutIssuesInput", {})
], IssuePriorityCreateWithoutIssuesInput);
