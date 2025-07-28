"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateInput_1 = require("../../../inputs/ProjectCreateInput");
const ProjectUpdateInput_1 = require("../../../inputs/ProjectUpdateInput");
const ProjectWhereUniqueInput_1 = require("../../../inputs/ProjectWhereUniqueInput");
let UpsertOneProjectArgs = class UpsertOneProjectArgs {
};
exports.UpsertOneProjectArgs = UpsertOneProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], UpsertOneProjectArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateInput_1.ProjectCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateInput_1.ProjectCreateInput)
], UpsertOneProjectArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateInput_1.ProjectUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateInput_1.ProjectUpdateInput)
], UpsertOneProjectArgs.prototype, "update", void 0);
exports.UpsertOneProjectArgs = UpsertOneProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProjectArgs);
