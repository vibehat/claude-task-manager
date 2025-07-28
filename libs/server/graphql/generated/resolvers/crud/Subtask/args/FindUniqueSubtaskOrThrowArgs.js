"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSubtaskOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskWhereUniqueInput_1 = require("../../../inputs/SubtaskWhereUniqueInput");
let FindUniqueSubtaskOrThrowArgs = class FindUniqueSubtaskOrThrowArgs {
};
exports.FindUniqueSubtaskOrThrowArgs = FindUniqueSubtaskOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], FindUniqueSubtaskOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueSubtaskOrThrowArgs = FindUniqueSubtaskOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSubtaskOrThrowArgs);
