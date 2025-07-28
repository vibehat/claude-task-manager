"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeamProjectMinOrderByAggregateInput = class TeamProjectMinOrderByAggregateInput {
};
exports.TeamProjectMinOrderByAggregateInput = TeamProjectMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinOrderByAggregateInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMinOrderByAggregateInput.prototype, "projectId", void 0);
exports.TeamProjectMinOrderByAggregateInput = TeamProjectMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectMinOrderByAggregateInput", {})
], TeamProjectMinOrderByAggregateInput);
