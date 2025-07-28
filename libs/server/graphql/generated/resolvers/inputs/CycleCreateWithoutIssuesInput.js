"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCreateNestedOneWithoutCyclesInput_1 = require("../inputs/TeamCreateNestedOneWithoutCyclesInput");
let CycleCreateWithoutIssuesInput = class CycleCreateWithoutIssuesInput {
};
exports.CycleCreateWithoutIssuesInput = CycleCreateWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateWithoutIssuesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateWithoutIssuesInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateWithoutIssuesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutIssuesInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutIssuesInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateWithoutIssuesInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutIssuesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateWithoutIssuesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutCyclesInput_1.TeamCreateNestedOneWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutCyclesInput_1.TeamCreateNestedOneWithoutCyclesInput)
], CycleCreateWithoutIssuesInput.prototype, "team", void 0);
exports.CycleCreateWithoutIssuesInput = CycleCreateWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateWithoutIssuesInput", {})
], CycleCreateWithoutIssuesInput);
