"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectSumOrderByAggregateInput = class ProjectSumOrderByAggregateInput {
};
exports.ProjectSumOrderByAggregateInput = ProjectSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectSumOrderByAggregateInput.prototype, "percentComplete", void 0);
exports.ProjectSumOrderByAggregateInput = ProjectSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectSumOrderByAggregateInput", {})
], ProjectSumOrderByAggregateInput);
