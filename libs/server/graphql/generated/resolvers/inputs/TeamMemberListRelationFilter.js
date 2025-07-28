"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberWhereInput_1 = require("../inputs/TeamMemberWhereInput");
let TeamMemberListRelationFilter = class TeamMemberListRelationFilter {
};
exports.TeamMemberListRelationFilter = TeamMemberListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], TeamMemberListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], TeamMemberListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], TeamMemberListRelationFilter.prototype, "none", void 0);
exports.TeamMemberListRelationFilter = TeamMemberListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberListRelationFilter", {})
], TeamMemberListRelationFilter);
