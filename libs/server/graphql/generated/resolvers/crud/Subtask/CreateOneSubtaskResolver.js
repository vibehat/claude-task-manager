"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSubtaskArgs_1 = require("./args/CreateOneSubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const helpers_1 = require("../../../helpers");
let CreateOneSubtaskResolver = class CreateOneSubtaskResolver {
    async createOneSubtask(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneSubtaskResolver = CreateOneSubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Subtask_1.Subtask, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSubtaskArgs_1.CreateOneSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSubtaskResolver.prototype, "createOneSubtask", null);
exports.CreateOneSubtaskResolver = CreateOneSubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], CreateOneSubtaskResolver);
