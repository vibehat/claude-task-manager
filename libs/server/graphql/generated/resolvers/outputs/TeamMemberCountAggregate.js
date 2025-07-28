"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberCountAggregate = class TeamMemberCountAggregate {
};
exports.TeamMemberCountAggregate = TeamMemberCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamMemberCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamMemberCountAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamMemberCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamMemberCountAggregate.prototype, "_all", void 0);
exports.TeamMemberCountAggregate = TeamMemberCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamMemberCountAggregate", {})
], TeamMemberCountAggregate);
