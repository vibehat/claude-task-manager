"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSubtaskArgs_1 = require("./args/UpdateOneSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let UpdateOneSubtaskResolver = class UpdateOneSubtaskResolver {
    async updateOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSubtaskResolver = UpdateOneSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSubtaskArgs_1.UpdateOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSubtaskResolver.prototype, "updateOneSubtask", null);
exports.UpdateOneSubtaskResolver = UpdateOneSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], UpdateOneSubtaskResolver);
