"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeamProjectMaxOrderByAggregateInput = class TeamProjectMaxOrderByAggregateInput {
};
exports.TeamProjectMaxOrderByAggregateInput = TeamProjectMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxOrderByAggregateInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxOrderByAggregateInput.prototype, "projectId", void 0);
exports.TeamProjectMaxOrderByAggregateInput = TeamProjectMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectMaxOrderByAggregateInput", {})
], TeamProjectMaxOrderByAggregateInput);
