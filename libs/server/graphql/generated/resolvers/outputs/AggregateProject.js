"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProject = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectAvgAggregate_1 = require("../outputs/ProjectAvgAggregate");
const ProjectCountAggregate_1 = require("../outputs/ProjectCountAggregate");
const ProjectMaxAggregate_1 = require("../outputs/ProjectMaxAggregate");
const ProjectMinAggregate_1 = require("../outputs/ProjectMinAggregate");
const ProjectSumAggregate_1 = require("../outputs/ProjectSumAggregate");
let AggregateProject = class AggregateProject {
};
exports.AggregateProject = AggregateProject;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCountAggregate_1.ProjectCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCountAggregate_1.ProjectCountAggregate)
], AggregateProject.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectAvgAggregate_1.ProjectAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectAvgAggregate_1.ProjectAvgAggregate)
], AggregateProject.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectSumAggregate_1.ProjectSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectSumAggregate_1.ProjectSumAggregate)
], AggregateProject.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMinAggregate_1.ProjectMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMinAggregate_1.ProjectMinAggregate)
], AggregateProject.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMaxAggregate_1.ProjectMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMaxAggregate_1.ProjectMaxAggregate)
], AggregateProject.prototype, "_max", void 0);
exports.AggregateProject = AggregateProject = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProject", {})
], AggregateProject);
