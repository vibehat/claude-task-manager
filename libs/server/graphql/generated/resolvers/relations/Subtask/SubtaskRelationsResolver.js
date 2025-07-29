"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const Subtask_1 = require("../../../models/Subtask");
const Task_1 = require("../../../models/Task");
const SubtaskIssuesArgs_1 = require("./args/SubtaskIssuesArgs");
const helpers_1 = require("../../../helpers");
let SubtaskRelationsResolver = class SubtaskRelationsResolver {
    async parentTask(subtask, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUniqueOrThrow({
            where: {
                id: subtask.id,
            },
        }).parentTask({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issues(subtask, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.findUniqueOrThrow({
            where: {
                id: subtask.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SubtaskRelationsResolver = SubtaskRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Subtask_1.Subtask, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskRelationsResolver.prototype, "parentTask", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Subtask_1.Subtask, Object, Object, SubtaskIssuesArgs_1.SubtaskIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SubtaskRelationsResolver.prototype, "issues", null);
exports.SubtaskRelationsResolver = SubtaskRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], SubtaskRelationsResolver);
