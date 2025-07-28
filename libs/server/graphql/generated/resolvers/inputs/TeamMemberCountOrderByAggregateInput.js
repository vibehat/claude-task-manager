"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeamMemberCountOrderByAggregateInput = class TeamMemberCountOrderByAggregateInput {
};
exports.TeamMemberCountOrderByAggregateInput = TeamMemberCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCountOrderByAggregateInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberCountOrderByAggregateInput.prototype, "userId", void 0);
exports.TeamMemberCountOrderByAggregateInput = TeamMemberCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberCountOrderByAggregateInput", {})
], TeamMemberCountOrderByAggregateInput);
