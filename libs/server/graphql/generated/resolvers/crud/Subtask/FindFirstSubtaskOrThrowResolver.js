"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSubtaskOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSubtaskOrThrowArgs_1 = require("./args/FindFirstSubtaskOrThrowArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let FindFirstSubtaskOrThrowResolver = class FindFirstSubtaskOrThrowResolver {
    async findFirstSubtaskOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstSubtaskOrThrowResolver = FindFirstSubtaskOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubtaskOrThrowArgs_1.FindFirstSubtaskOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSubtaskOrThrowResolver.prototype, "findFirstSubtaskOrThrow", null);
exports.FindFirstSubtaskOrThrowResolver = FindFirstSubtaskOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], FindFirstSubtaskOrThrowResolver);
