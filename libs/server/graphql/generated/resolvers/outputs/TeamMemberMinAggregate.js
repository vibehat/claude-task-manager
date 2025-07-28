"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamMemberMinAggregate = class TeamMemberMinAggregate {
};
exports.TeamMemberMinAggregate = TeamMemberMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberMinAggregate.prototype, "userId", void 0);
exports.TeamMemberMinAggregate = TeamMemberMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamMemberMinAggregate", {})
], TeamMemberMinAggregate);
