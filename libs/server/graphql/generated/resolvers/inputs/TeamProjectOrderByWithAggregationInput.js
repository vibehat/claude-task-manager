"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCountOrderByAggregateInput_1 = require("../inputs/TeamProjectCountOrderByAggregateInput");
const TeamProjectMaxOrderByAggregateInput_1 = require("../inputs/TeamProjectMaxOrderByAggregateInput");
const TeamProjectMinOrderByAggregateInput_1 = require("../inputs/TeamProjectMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamProjectOrderByWithAggregationInput = class TeamProjectOrderByWithAggregationInput {
};
exports.TeamProjectOrderByWithAggregationInput = TeamProjectOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithAggregationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectOrderByWithAggregationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCountOrderByAggregateInput_1.TeamProjectCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCountOrderByAggregateInput_1.TeamProjectCountOrderByAggregateInput)
], TeamProjectOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMaxOrderByAggregateInput_1.TeamProjectMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMaxOrderByAggregateInput_1.TeamProjectMaxOrderByAggregateInput)
], TeamProjectOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMinOrderByAggregateInput_1.TeamProjectMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMinOrderByAggregateInput_1.TeamProjectMinOrderByAggregateInput)
], TeamProjectOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TeamProjectOrderByWithAggregationInput = TeamProjectOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectOrderByWithAggregationInput", {})
], TeamProjectOrderByWithAggregationInput);
