"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSubtaskArgs_1 = require("./args/FindUniqueSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let FindUniqueSubtaskResolver = class FindUniqueSubtaskResolver {
    async subtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSubtaskResolver = FindUniqueSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSubtaskArgs_1.FindUniqueSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSubtaskResolver.prototype, "subtask", null);
exports.FindUniqueSubtaskResolver = FindUniqueSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], FindUniqueSubtaskResolver);
