"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTaskDependencyArgs_1 = require("./args/CreateOneTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let CreateOneTaskDependencyResolver = class CreateOneTaskDependencyResolver {
    async createOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTaskDependencyResolver = CreateOneTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaskDependencyArgs_1.CreateOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTaskDependencyResolver.prototype, "createOneTaskDependency", null);
exports.CreateOneTaskDependencyResolver = CreateOneTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], CreateOneTaskDependencyResolver);
