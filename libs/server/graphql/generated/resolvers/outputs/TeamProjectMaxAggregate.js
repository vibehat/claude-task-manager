"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectMaxAggregate = class TeamProjectMaxAggregate {
};
exports.TeamProjectMaxAggregate = TeamProjectMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectMaxAggregate.prototype, "projectId", void 0);
exports.TeamProjectMaxAggregate = TeamProjectMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamProjectMaxAggregate", {})
], TeamProjectMaxAggregate);
