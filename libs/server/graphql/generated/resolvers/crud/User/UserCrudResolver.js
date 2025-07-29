"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const CreateManyAndReturnUserArgs_1 = require("./args/CreateManyAndReturnUserArgs");
const CreateManyUserArgs_1 = require("./args/CreateManyUserArgs");
const CreateOneUserArgs_1 = require("./args/CreateOneUserArgs");
const DeleteManyUserArgs_1 = require("./args/DeleteManyUserArgs");
const DeleteOneUserArgs_1 = require("./args/DeleteOneUserArgs");
const FindFirstUserArgs_1 = require("./args/FindFirstUserArgs");
const FindFirstUserOrThrowArgs_1 = require("./args/FindFirstUserOrThrowArgs");
const FindManyUserArgs_1 = require("./args/FindManyUserArgs");
const FindUniqueUserArgs_1 = require("./args/FindUniqueUserArgs");
const FindUniqueUserOrThrowArgs_1 = require("./args/FindUniqueUserOrThrowArgs");
const GroupByUserArgs_1 = require("./args/GroupByUserArgs");
const UpdateManyUserArgs_1 = require("./args/UpdateManyUserArgs");
const UpdateOneUserArgs_1 = require("./args/UpdateOneUserArgs");
const UpsertOneUserArgs_1 = require("./args/UpsertOneUserArgs");
const helpers_1 = require("../../../helpers");
const User_1 = require("../../../models/User");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const CreateManyAndReturnUser_1 = require("../../outputs/CreateManyAndReturnUser");
const UserGroupBy_1 = require("../../outputs/UserGroupBy");
let UserCrudResolver = class UserCrudResolver {
    async aggregateUser(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async users(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async user(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUser(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UserCrudResolver = UserCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "aggregateUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUserArgs_1.CreateManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createManyUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUser_1.CreateManyAndReturnUser], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnUserArgs_1.CreateManyAndReturnUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createManyAndReturnUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserArgs_1.CreateOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createOneUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserArgs_1.DeleteManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteManyUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUserArgs_1.DeleteOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteOneUser", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserArgs_1.FindFirstUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUser", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserOrThrowArgs_1.FindFirstUserOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUserOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserArgs_1.FindManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "users", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserArgs_1.FindUniqueUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserOrThrowArgs_1.FindUniqueUserOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "getUser", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserGroupBy_1.UserGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserArgs_1.GroupByUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "groupByUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserArgs_1.UpdateManyUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateManyUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserArgs_1.UpdateOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateOneUser", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserArgs_1.UpsertOneUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "upsertOneUser", null);
exports.UserCrudResolver = UserCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserCrudResolver);
