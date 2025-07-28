"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeamProject = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectCountAggregate_1 = require("../outputs/TeamProjectCountAggregate");
const TeamProjectMaxAggregate_1 = require("../outputs/TeamProjectMaxAggregate");
const TeamProjectMinAggregate_1 = require("../outputs/TeamProjectMinAggregate");
let AggregateTeamProject = class AggregateTeamProject {
};
exports.AggregateTeamProject = AggregateTeamProject;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectCountAggregate_1.TeamProjectCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectCountAggregate_1.TeamProjectCountAggregate)
], AggregateTeamProject.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMinAggregate_1.TeamProjectMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMinAggregate_1.TeamProjectMinAggregate)
], AggregateTeamProject.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectMaxAggregate_1.TeamProjectMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectMaxAggregate_1.TeamProjectMaxAggregate)
], AggregateTeamProject.prototype, "_max", void 0);
exports.AggregateTeamProject = AggregateTeamProject = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTeamProject", {})
], AggregateTeamProject);
