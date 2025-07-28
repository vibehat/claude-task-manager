"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TeamMemberMinOrderByAggregateInput = class TeamMemberMinOrderByAggregateInput {
};
exports.TeamMemberMinOrderByAggregateInput = TeamMemberMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinOrderByAggregateInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinOrderByAggregateInput.prototype, "userId", void 0);
exports.TeamMemberMinOrderByAggregateInput = TeamMemberMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberMinOrderByAggregateInput", {})
], TeamMemberMinOrderByAggregateInput);
