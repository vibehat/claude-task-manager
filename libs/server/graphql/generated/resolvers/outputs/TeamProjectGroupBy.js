"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCountAggregate_1 = require("../outputs/TeamProjectCountAggregate");
const TeamProjectMaxAggregate_1 = require("../outputs/TeamProjectMaxAggregate");
const TeamProjectMinAggregate_1 = require("../outputs/TeamProjectMinAggregate");
let TeamProjectGroupBy = class TeamProjectGroupBy {
};
exports.TeamProjectGroupBy = TeamProjectGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectGroupBy.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProjectGroupBy.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCountAggregate_1.TeamProjectCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCountAggregate_1.TeamProjectCountAggregate)
], TeamProjectGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMinAggregate_1.TeamProjectMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMinAggregate_1.TeamProjectMinAggregate)
], TeamProjectGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMaxAggregate_1.TeamProjectMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMaxAggregate_1.TeamProjectMaxAggregate)
], TeamProjectGroupBy.prototype, "_max", void 0);
exports.TeamProjectGroupBy = TeamProjectGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamProjectGroupBy", {})
], TeamProjectGroupBy);
