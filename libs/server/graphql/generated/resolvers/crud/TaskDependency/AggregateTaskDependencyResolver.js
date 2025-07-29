"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskDependencyArgs_1 = require("./args/AggregateTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const AggregateTaskDependency_1 = require("../../outputs/AggregateTaskDependency");
const helpers_1 = require("../../../helpers");
let AggregateTaskDependencyResolver = class AggregateTaskDependencyResolver {
    async aggregateTaskDependency(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTaskDependencyResolver = AggregateTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaskDependency_1.AggregateTaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskDependencyArgs_1.AggregateTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTaskDependencyResolver.prototype, "aggregateTaskDependency", null);
exports.AggregateTaskDependencyResolver = AggregateTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], AggregateTaskDependencyResolver);
