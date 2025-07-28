"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectRelationFilter = class ProjectRelationFilter {
};
exports.ProjectRelationFilter = ProjectRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectRelationFilter.prototype, "isNot", void 0);
exports.ProjectRelationFilter = ProjectRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectRelationFilter", {})
], ProjectRelationFilter);
