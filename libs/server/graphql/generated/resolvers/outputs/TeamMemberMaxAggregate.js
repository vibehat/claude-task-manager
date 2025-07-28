"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberMaxAggregate = class TeamMemberMaxAggregate {
};
exports.TeamMemberMaxAggregate = TeamMemberMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMaxAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMaxAggregate.prototype, "userId", void 0);
exports.TeamMemberMaxAggregate = TeamMemberMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamMemberMaxAggregate", {})
], TeamMemberMaxAggregate);
