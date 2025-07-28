"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProjectOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectWhereUniqueInput_1 = require("../../../inputs/ProjectWhereUniqueInput");
let FindUniqueProjectOrThrowArgs = class FindUniqueProjectOrThrowArgs {
};
exports.FindUniqueProjectOrThrowArgs = FindUniqueProjectOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], FindUniqueProjectOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueProjectOrThrowArgs = FindUniqueProjectOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProjectOrThrowArgs);
