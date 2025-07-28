"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskCreateManyParentTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SubtaskCreateManyParentTaskInput = class SubtaskCreateManyParentTaskInput {
};
exports.SubtaskCreateManyParentTaskInput = SubtaskCreateManyParentTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskCreateManyParentTaskInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateManyParentTaskInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubtaskCreateManyParentTaskInput.prototype, "updatedAt", void 0);
exports.SubtaskCreateManyParentTaskInput = SubtaskCreateManyParentTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskCreateManyParentTaskInput", {})
], SubtaskCreateManyParentTaskInput);
