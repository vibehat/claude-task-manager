"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneSubtaskArgs_1 = require("./args/DeleteOneSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let DeleteOneSubtaskResolver = class DeleteOneSubtaskResolver {
    async deleteOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneSubtaskResolver = DeleteOneSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSubtaskArgs_1.DeleteOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSubtaskResolver.prototype, "deleteOneSubtask", null);
exports.DeleteOneSubtaskResolver = DeleteOneSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], DeleteOneSubtaskResolver);
