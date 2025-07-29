"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySubtaskArgs_1 = require("./args/UpdateManySubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySubtaskResolver = class UpdateManySubtaskResolver {
    async updateManySubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManySubtaskResolver = UpdateManySubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySubtaskArgs_1.UpdateManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySubtaskResolver.prototype, "updateManySubtask", null);
exports.UpdateManySubtaskResolver = UpdateManySubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], UpdateManySubtaskResolver);
