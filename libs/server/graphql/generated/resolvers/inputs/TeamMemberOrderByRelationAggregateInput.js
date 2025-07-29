"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeamMemberOrderByRelationAggregateInput = class TeamMemberOrderByRelationAggregateInput {
};
exports.TeamMemberOrderByRelationAggregateInput = TeamMemberOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.TeamMemberOrderByRelationAggregateInput = TeamMemberOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberOrderByRelationAggregateInput", {})
], TeamMemberOrderByRelationAggregateInput);
