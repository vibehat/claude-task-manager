"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateManyMutationInput_1 = require("../../../inputs/ProjectUpdateManyMutationInput");
const ProjectWhereInput_1 = require("../../../inputs/ProjectWhereInput");
let UpdateManyProjectArgs = class UpdateManyProjectArgs {
};
exports.UpdateManyProjectArgs = UpdateManyProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateManyMutationInput_1.ProjectUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateManyMutationInput_1.ProjectUpdateManyMutationInput)
], UpdateManyProjectArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], UpdateManyProjectArgs.prototype, "where", void 0);
exports.UpdateManyProjectArgs = UpdateManyProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProjectArgs);
