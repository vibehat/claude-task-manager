"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTaskArgs_1 = require("./args/DeleteManyTaskArgs");
const Task_1 = require("../../../models/Task");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTaskResolver = class DeleteManyTaskResolver {
    async deleteManyTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTaskResolver = DeleteManyTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaskArgs_1.DeleteManyTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTaskResolver.prototype, "deleteManyTask", null);
exports.DeleteManyTaskResolver = DeleteManyTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], DeleteManyTaskResolver);
