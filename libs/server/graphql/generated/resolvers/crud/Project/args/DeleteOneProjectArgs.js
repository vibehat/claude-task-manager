"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereUniqueInput_1 = require("../../../inputs/ProjectWhereUniqueInput");
let DeleteOneProjectArgs = class DeleteOneProjectArgs {
};
exports.DeleteOneProjectArgs = DeleteOneProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], DeleteOneProjectArgs.prototype, "where", void 0);
exports.DeleteOneProjectArgs = DeleteOneProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProjectArgs);
