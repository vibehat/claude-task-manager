"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCountOrderByAggregateInput_1 = require("../inputs/TeamCountOrderByAggregateInput");
const TeamMaxOrderByAggregateInput_1 = require("../inputs/TeamMaxOrderByAggregateInput");
const TeamMinOrderByAggregateInput_1 = require("../inputs/TeamMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamOrderByWithAggregationInput = class TeamOrderByWithAggregationInput {
};
exports.TeamOrderByWithAggregationInput = TeamOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamCountOrderByAggregateInput_1.TeamCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamCountOrderByAggregateInput_1.TeamCountOrderByAggregateInput)
], TeamOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMaxOrderByAggregateInput_1.TeamMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMaxOrderByAggregateInput_1.TeamMaxOrderByAggregateInput)
], TeamOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMinOrderByAggregateInput_1.TeamMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMinOrderByAggregateInput_1.TeamMinOrderByAggregateInput)
], TeamOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TeamOrderByWithAggregationInput = TeamOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamOrderByWithAggregationInput", {})
], TeamOrderByWithAggregationInput);
