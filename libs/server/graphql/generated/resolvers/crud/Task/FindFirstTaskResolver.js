"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTaskArgs_1 = require("./args/FindFirstTaskArgs");
const Task_1 = require("../../../models/Task");
const helpers_1 = require("../../../helpers");
let FindFirstTaskResolver = class FindFirstTaskResolver {
    async findFirstTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTaskResolver = FindFirstTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskArgs_1.FindFirstTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTaskResolver.prototype, "findFirstTask", null);
exports.FindFirstTaskResolver = FindFirstTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], FindFirstTaskResolver);
