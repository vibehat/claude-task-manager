"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutIssueStatusInput_1 = require("../inputs/IssueCreateNestedManyWithoutIssueStatusInput");
let IssueStatusCreateInput = class IssueStatusCreateInput {
};
exports.IssueStatusCreateInput = IssueStatusCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusCreateInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssueStatusCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutIssueStatusInput_1.IssueCreateNestedManyWithoutIssueStatusInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutIssueStatusInput_1.IssueCreateNestedManyWithoutIssueStatusInput)
], IssueStatusCreateInput.prototype, "issues", void 0);
exports.IssueStatusCreateInput = IssueStatusCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusCreateInput", {})
], IssueStatusCreateInput);
