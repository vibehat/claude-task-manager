"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutCycleInput_1 = require("../inputs/IssueCreateNestedManyWithoutCycleInput");
let CycleCreateWithoutTeamInput = class CycleCreateWithoutTeamInput {
};
exports.CycleCreateWithoutTeamInput = CycleCreateWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateWithoutTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateWithoutTeamInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateWithoutTeamInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutTeamInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutTeamInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateWithoutTeamInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutTeamInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutTeamInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutCycleInput_1.IssueCreateNestedManyWithoutCycleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutCycleInput_1.IssueCreateNestedManyWithoutCycleInput)
], CycleCreateWithoutTeamInput.prototype, "issues", void 0);
exports.CycleCreateWithoutTeamInput = CycleCreateWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateWithoutTeamInput", {})
], CycleCreateWithoutTeamInput);
