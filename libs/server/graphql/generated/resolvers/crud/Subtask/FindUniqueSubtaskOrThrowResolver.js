"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSubtaskOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSubtaskOrThrowArgs_1 = require("./args/FindUniqueSubtaskOrThrowArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let FindUniqueSubtaskOrThrowResolver = class FindUniqueSubtaskOrThrowResolver {
    async getSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSubtaskOrThrowResolver = FindUniqueSubtaskOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubtaskOrThrowArgs_1.FindUniqueSubtaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSubtaskOrThrowResolver.prototype, "getSubtask", null);
exports.FindUniqueSubtaskOrThrowResolver = FindUniqueSubtaskOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], FindUniqueSubtaskOrThrowResolver);
