"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSubtaskArgs_1 = require("./args/FindFirstSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let FindFirstSubtaskResolver = class FindFirstSubtaskResolver {
    async findFirstSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstSubtaskResolver = FindFirstSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSubtaskArgs_1.FindFirstSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSubtaskResolver.prototype, "findFirstSubtask", null);
exports.FindFirstSubtaskResolver = FindFirstSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], FindFirstSubtaskResolver);
