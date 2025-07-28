"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let TeamMemberScalarWhereInput = class TeamMemberScalarWhereInput {
};
exports.TeamMemberScalarWhereInput = TeamMemberScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberScalarWhereInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberScalarWhereInput.prototype, "userId", void 0);
exports.TeamMemberScalarWhereInput = TeamMemberScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberScalarWhereInput", {})
], TeamMemberScalarWhereInput);
