"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateWithoutParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutSubtaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutSubtaskInput");
let SubtaskCreateWithoutParentTaskInput = class SubtaskCreateWithoutParentTaskInput {
};
exports.SubtaskCreateWithoutParentTaskInput = SubtaskCreateWithoutParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateWithoutParentTaskInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateWithoutParentTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateWithoutParentTaskInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutSubtaskInput_1.IssueCreateNestedManyWithoutSubtaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutSubtaskInput_1.IssueCreateNestedManyWithoutSubtaskInput)
], SubtaskCreateWithoutParentTaskInput.prototype, "issues", void 0);
exports.SubtaskCreateWithoutParentTaskInput = SubtaskCreateWithoutParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateWithoutParentTaskInput", {})
], SubtaskCreateWithoutParentTaskInput);
