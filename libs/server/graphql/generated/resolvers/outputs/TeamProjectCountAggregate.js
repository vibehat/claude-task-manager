"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProjectCountAggregate = class TeamProjectCountAggregate {
};
exports.TeamProjectCountAggregate = TeamProjectCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectCountAggregate.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectCountAggregate.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TeamProjectCountAggregate.prototype, "_all", void 0);
exports.TeamProjectCountAggregate = TeamProjectCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamProjectCountAggregate", {})
], TeamProjectCountAggregate);
