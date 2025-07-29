"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithRelationInput_1 = require("../inputs/TeamOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TeamMemberOrderByWithRelationInput = class TeamMemberOrderByWithRelationInput {
};
exports.TeamMemberOrderByWithRelationInput = TeamMemberOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithRelationInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamOrderByWithRelationInput_1.TeamOrderByWithRelationInput)
], TeamMemberOrderByWithRelationInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], TeamMemberOrderByWithRelationInput.prototype, "user", void 0);
exports.TeamMemberOrderByWithRelationInput = TeamMemberOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberOrderByWithRelationInput", {})
], TeamMemberOrderByWithRelationInput);
