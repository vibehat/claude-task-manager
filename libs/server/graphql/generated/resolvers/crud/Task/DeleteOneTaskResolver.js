"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTaskArgs_1 = require("./args/DeleteOneTaskArgs");
const Task_1 = require("../../../models/Task");
const helpers_1 = require("../../../helpers");
let DeleteOneTaskResolver = class DeleteOneTaskResolver {
    async deleteOneTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTaskResolver = DeleteOneTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskArgs_1.DeleteOneTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTaskResolver.prototype, "deleteOneTask", null);
exports.DeleteOneTaskResolver = DeleteOneTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], DeleteOneTaskResolver);
