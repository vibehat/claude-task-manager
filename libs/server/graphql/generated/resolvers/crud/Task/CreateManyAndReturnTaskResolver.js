"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTaskArgs_1 = require("./args/CreateManyAndReturnTaskArgs");
const Task_1 = require("../../../models/Task");
const CreateManyAndReturnTask_1 = require("../../outputs/CreateManyAndReturnTask");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTaskResolver = class CreateManyAndReturnTaskResolver {
    async createManyAndReturnTask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTaskResolver = CreateManyAndReturnTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTask_1.CreateManyAndReturnTask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskArgs_1.CreateManyAndReturnTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTaskResolver.prototype, "createManyAndReturnTask", null);
exports.CreateManyAndReturnTaskResolver = CreateManyAndReturnTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], CreateManyAndReturnTaskResolver);
