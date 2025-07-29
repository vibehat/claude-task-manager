"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectAvgAggregate_1 = require("../outputs/ProjectAvgAggregate");
const ProjectCountAggregate_1 = require("../outputs/ProjectCountAggregate");
const ProjectMaxAggregate_1 = require("../outputs/ProjectMaxAggregate");
const ProjectMinAggregate_1 = require("../outputs/ProjectMinAggregate");
const ProjectSumAggregate_1 = require("../outputs/ProjectSumAggregate");
let ProjectGroupBy = class ProjectGroupBy {
};
exports.ProjectGroupBy = ProjectGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProjectGroupBy.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectGroupBy.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectGroupBy.prototype, "leadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProjectGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCountAggregate_1.ProjectCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCountAggregate_1.ProjectCountAggregate)
], ProjectGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectAvgAggregate_1.ProjectAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectAvgAggregate_1.ProjectAvgAggregate)
], ProjectGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectSumAggregate_1.ProjectSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectSumAggregate_1.ProjectSumAggregate)
], ProjectGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMinAggregate_1.ProjectMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMinAggregate_1.ProjectMinAggregate)
], ProjectGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMaxAggregate_1.ProjectMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMaxAggregate_1.ProjectMaxAggregate)
], ProjectGroupBy.prototype, "_max", void 0);
exports.ProjectGroupBy = ProjectGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectGroupBy", {})
], ProjectGroupBy);
