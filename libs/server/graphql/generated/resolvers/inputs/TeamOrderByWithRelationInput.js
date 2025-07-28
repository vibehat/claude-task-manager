"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleOrderByRelationAggregateInput_1 = require("../inputs/CycleOrderByRelationAggregateInput");
const TeamMemberOrderByRelationAggregateInput_1 = require("../inputs/TeamMemberOrderByRelationAggregateInput");
const TeamProjectOrderByRelationAggregateInput_1 = require("../inputs/TeamProjectOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamOrderByWithRelationInput = class TeamOrderByWithRelationInput {
};
exports.TeamOrderByWithRelationInput = TeamOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberOrderByRelationAggregateInput_1.TeamMemberOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberOrderByRelationAggregateInput_1.TeamMemberOrderByRelationAggregateInput)
], TeamOrderByWithRelationInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectOrderByRelationAggregateInput_1.TeamProjectOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectOrderByRelationAggregateInput_1.TeamProjectOrderByRelationAggregateInput)
], TeamOrderByWithRelationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleOrderByRelationAggregateInput_1.CycleOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleOrderByRelationAggregateInput_1.CycleOrderByRelationAggregateInput)
], TeamOrderByWithRelationInput.prototype, "cycles", void 0);
exports.TeamOrderByWithRelationInput = TeamOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamOrderByWithRelationInput", {})
], TeamOrderByWithRelationInput);
