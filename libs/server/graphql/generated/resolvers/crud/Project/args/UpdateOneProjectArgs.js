"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateInput_1 = require("../../../inputs/ProjectUpdateInput");
const ProjectWhereUniqueInput_1 = require("../../../inputs/ProjectWhereUniqueInput");
let UpdateOneProjectArgs = class UpdateOneProjectArgs {
};
exports.UpdateOneProjectArgs = UpdateOneProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateInput_1.ProjectUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateInput_1.ProjectUpdateInput)
], UpdateOneProjectArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], UpdateOneProjectArgs.prototype, "where", void 0);
exports.UpdateOneProjectArgs = UpdateOneProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProjectArgs);
