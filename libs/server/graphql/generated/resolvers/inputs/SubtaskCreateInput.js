"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutSubtaskInput_1 = require("../inputs/IssueCreateNestedManyWithoutSubtaskInput");
const TaskCreateNestedOneWithoutSubtasksInput_1 = require("../inputs/TaskCreateNestedOneWithoutSubtasksInput");
let SubtaskCreateInput = class SubtaskCreateInput {
};
exports.SubtaskCreateInput = SubtaskCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutSubtasksInput_1.TaskCreateNestedOneWithoutSubtasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutSubtasksInput_1.TaskCreateNestedOneWithoutSubtasksInput)
], SubtaskCreateInput.prototype, "parentTask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutSubtaskInput_1.IssueCreateNestedManyWithoutSubtaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutSubtaskInput_1.IssueCreateNestedManyWithoutSubtaskInput)
], SubtaskCreateInput.prototype, "issues", void 0);
exports.SubtaskCreateInput = SubtaskCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateInput", {})
], SubtaskCreateInput);
