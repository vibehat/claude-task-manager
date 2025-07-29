"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCountOrderByAggregateInput_1 = require("../inputs/TeamMemberCountOrderByAggregateInput");
const TeamMemberMaxOrderByAggregateInput_1 = require("../inputs/TeamMemberMaxOrderByAggregateInput");
const TeamMemberMinOrderByAggregateInput_1 = require("../inputs/TeamMemberMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamMemberOrderByWithAggregationInput = class TeamMemberOrderByWithAggregationInput {
};
exports.TeamMemberOrderByWithAggregationInput = TeamMemberOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithAggregationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCountOrderByAggregateInput_1.TeamMemberCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCountOrderByAggregateInput_1.TeamMemberCountOrderByAggregateInput)
], TeamMemberOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMaxOrderByAggregateInput_1.TeamMemberMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMaxOrderByAggregateInput_1.TeamMemberMaxOrderByAggregateInput)
], TeamMemberOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMinOrderByAggregateInput_1.TeamMemberMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMinOrderByAggregateInput_1.TeamMemberMinOrderByAggregateInput)
], TeamMemberOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TeamMemberOrderByWithAggregationInput = TeamMemberOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberOrderByWithAggregationInput", {})
], TeamMemberOrderByWithAggregationInput);
