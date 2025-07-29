"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectListRelationFilter = class ProjectListRelationFilter {
};
exports.ProjectListRelationFilter = ProjectListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "none", void 0);
exports.ProjectListRelationFilter = ProjectListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectListRelationFilter", {})
], ProjectListRelationFilter);
