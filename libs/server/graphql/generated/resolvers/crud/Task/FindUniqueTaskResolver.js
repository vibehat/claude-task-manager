"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTaskArgs_1 = require("./args/FindUniqueTaskArgs");
const Task_1 = require("../../../models/Task");
const helpers_1 = require("../../../helpers");
let FindUniqueTaskResolver = class FindUniqueTaskResolver {
    async task(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTaskResolver = FindUniqueTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskArgs_1.FindUniqueTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTaskResolver.prototype, "task", null);
exports.FindUniqueTaskResolver = FindUniqueTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], FindUniqueTaskResolver);
