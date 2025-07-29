"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaskArgs_1 = require("./args/AggregateTaskArgs");
const Task_1 = require("../../../models/Task");
const AggregateTask_1 = require("../../outputs/AggregateTask");
const helpers_1 = require("../../../helpers");
let AggregateTaskResolver = class AggregateTaskResolver {
    async aggregateTask(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).task.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTaskResolver = AggregateTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTask_1.AggregateTask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaskArgs_1.AggregateTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTaskResolver.prototype, "aggregateTask", null);
exports.AggregateTaskResolver = AggregateTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], AggregateTaskResolver);
