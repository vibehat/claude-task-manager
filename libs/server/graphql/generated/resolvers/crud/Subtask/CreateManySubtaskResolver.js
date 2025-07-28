"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySubtaskArgs_1 = require("./args/CreateManySubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySubtaskResolver = class CreateManySubtaskResolver {
    async createManySubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManySubtaskResolver = CreateManySubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySubtaskArgs_1.CreateManySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySubtaskResolver.prototype, "createManySubtask", null);
exports.CreateManySubtaskResolver = CreateManySubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], CreateManySubtaskResolver);
