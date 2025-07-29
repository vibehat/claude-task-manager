"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTaskArgs_1 = require("./args/UpdateManyTaskArgs");
const Task_1 = require("../../../models/Task");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTaskResolver = class UpdateManyTaskResolver {
    async updateManyTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTaskResolver = UpdateManyTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskArgs_1.UpdateManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTaskResolver.prototype, "updateManyTask", null);
exports.UpdateManyTaskResolver = UpdateManyTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], UpdateManyTaskResolver);
