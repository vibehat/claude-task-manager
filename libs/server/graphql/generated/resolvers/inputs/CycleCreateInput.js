"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateNestedManyWithoutCycleInput_1 = require("../inputs/IssueCreateNestedManyWithoutCycleInput");
const TeamCreateNestedOneWithoutCyclesInput_1 = require("../inputs/TeamCreateNestedOneWithoutCyclesInput");
let CycleCreateInput = class CycleCreateInput {
};
exports.CycleCreateInput = CycleCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CycleCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CycleCreateInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CycleCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutCyclesInput_1.TeamCreateNestedOneWithoutCyclesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamCreateNestedOneWithoutCyclesInput_1.TeamCreateNestedOneWithoutCyclesInput)
], CycleCreateInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutCycleInput_1.IssueCreateNestedManyWithoutCycleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateNestedManyWithoutCycleInput_1.IssueCreateNestedManyWithoutCycleInput)
], CycleCreateInput.prototype, "issues", void 0);
exports.CycleCreateInput = CycleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleCreateInput", {})
], CycleCreateInput);
