"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamMember = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCountAggregate_1 = require("../outputs/TeamMemberCountAggregate");
const TeamMemberMaxAggregate_1 = require("../outputs/TeamMemberMaxAggregate");
const TeamMemberMinAggregate_1 = require("../outputs/TeamMemberMinAggregate");
let AggregateTeamMember = class AggregateTeamMember {
};
exports.AggregateTeamMember = AggregateTeamMember;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCountAggregate_1.TeamMemberCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberCountAggregate_1.TeamMemberCountAggregate)
], AggregateTeamMember.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMinAggregate_1.TeamMemberMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMinAggregate_1.TeamMemberMinAggregate)
], AggregateTeamMember.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberMaxAggregate_1.TeamMemberMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberMaxAggregate_1.TeamMemberMaxAggregate)
], AggregateTeamMember.prototype, "_max", void 0);
exports.AggregateTeamMember = AggregateTeamMember = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTeamMember", {})
], AggregateTeamMember);
