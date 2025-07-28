"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCountAggregate_1 = require("../outputs/TeamMemberCountAggregate");
const TeamMemberMaxAggregate_1 = require("../outputs/TeamMemberMaxAggregate");
const TeamMemberMinAggregate_1 = require("../outputs/TeamMemberMinAggregate");
let TeamMemberGroupBy = class TeamMemberGroupBy {
};
exports.TeamMemberGroupBy = TeamMemberGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberGroupBy.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCountAggregate_1.TeamMemberCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCountAggregate_1.TeamMemberCountAggregate)
], TeamMemberGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMinAggregate_1.TeamMemberMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMinAggregate_1.TeamMemberMinAggregate)
], TeamMemberGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMaxAggregate_1.TeamMemberMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMaxAggregate_1.TeamMemberMaxAggregate)
], TeamMemberGroupBy.prototype, "_max", void 0);
exports.TeamMemberGroupBy = TeamMemberGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamMemberGroupBy", {})
], TeamMemberGroupBy);
