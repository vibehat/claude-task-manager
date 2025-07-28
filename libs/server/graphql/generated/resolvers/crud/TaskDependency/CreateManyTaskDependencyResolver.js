"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTaskDependencyArgs_1 = require("./args/CreateManyTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTaskDependencyResolver = class CreateManyTaskDependencyResolver {
    async createManyTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTaskDependencyResolver = CreateManyTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaskDependencyArgs_1.CreateManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTaskDependencyResolver.prototype, "createManyTaskDependency", null);
exports.CreateManyTaskDependencyResolver = CreateManyTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], CreateManyTaskDependencyResolver);
