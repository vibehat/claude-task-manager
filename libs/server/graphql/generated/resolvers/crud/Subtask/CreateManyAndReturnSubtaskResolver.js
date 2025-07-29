"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnSubtaskArgs_1 = require("./args/CreateManyAndReturnSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const CreateManyAndReturnSubtask_1 = require("../../outputs/CreateManyAndReturnSubtask");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnSubtaskResolver = class CreateManyAndReturnSubtaskResolver {
    async createManyAndReturnSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnSubtaskResolver = CreateManyAndReturnSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSubtask_1.CreateManyAndReturnSubtask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSubtaskArgs_1.CreateManyAndReturnSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnSubtaskResolver.prototype, "createManyAndReturnSubtask", null);
exports.CreateManyAndReturnSubtaskResolver = CreateManyAndReturnSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], CreateManyAndReturnSubtaskResolver);
