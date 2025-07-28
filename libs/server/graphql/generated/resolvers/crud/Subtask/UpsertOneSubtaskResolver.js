"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneSubtaskArgs_1 = require("./args/UpsertOneSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let UpsertOneSubtaskResolver = class UpsertOneSubtaskResolver {
    async upsertOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneSubtaskResolver = UpsertOneSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSubtaskArgs_1.UpsertOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSubtaskResolver.prototype, "upsertOneSubtask", null);
exports.UpsertOneSubtaskResolver = UpsertOneSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], UpsertOneSubtaskResolver);
