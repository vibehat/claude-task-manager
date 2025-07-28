"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTaskDependencyArgs_1 = require("./args/CreateManyAndReturnTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const CreateManyAndReturnTaskDependency_1 = require("../../outputs/CreateManyAndReturnTaskDependency");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTaskDependencyResolver = class CreateManyAndReturnTaskDependencyResolver {
    async createManyAndReturnTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTaskDependencyResolver = CreateManyAndReturnTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskDependency_1.CreateManyAndReturnTaskDependency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTaskDependencyArgs_1.CreateManyAndReturnTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTaskDependencyResolver.prototype, "createManyAndReturnTaskDependency", null);
exports.CreateManyAndReturnTaskDependencyResolver = CreateManyAndReturnTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], CreateManyAndReturnTaskDependencyResolver);
