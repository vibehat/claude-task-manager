"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateNestedManyWithoutIssuePriorityInput");
let IssuePriorityCreateInput = class IssuePriorityCreateInput {
};
exports.IssuePriorityCreateInput = IssuePriorityCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCreateInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], IssuePriorityCreateInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], IssuePriorityCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutIssuePriorityInput_1.IssueCreateNestedManyWithoutIssuePriorityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutIssuePriorityInput_1.IssueCreateNestedManyWithoutIssuePriorityInput)
], IssuePriorityCreateInput.prototype, "issues", void 0);
exports.IssuePriorityCreateInput = IssuePriorityCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityCreateInput", {})
], IssuePriorityCreateInput);
