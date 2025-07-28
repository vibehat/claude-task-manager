"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSubtaskArgs_1 = require("./args/AggregateSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const AggregateSubtask_1 = require("../../outputs/AggregateSubtask");
const helpers_1 = require("../../../helpers");
let AggregateSubtaskResolver = class AggregateSubtaskResolver {
    async aggregateSubtask(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateSubtaskResolver = AggregateSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubtask_1.AggregateSubtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubtaskArgs_1.AggregateSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSubtaskResolver.prototype, "aggregateSubtask", null);
exports.AggregateSubtaskResolver = AggregateSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], AggregateSubtaskResolver);
