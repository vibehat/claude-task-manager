"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByRelationAggregateInput_1 = require("../inputs/IssueOrderByRelationAggregateInput");
const TeamOrderByWithRelationInput_1 = require("../inputs/TeamOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CycleOrderByWithRelationInput = class CycleOrderByWithRelationInput {
};
exports.CycleOrderByWithRelationInput = CycleOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "progress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CycleOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput)
], CycleOrderByWithRelationInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput)
], CycleOrderByWithRelationInput.prototype, "issues", void 0);
exports.CycleOrderByWithRelationInput = CycleOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleOrderByWithRelationInput", {})
], CycleOrderByWithRelationInput);
